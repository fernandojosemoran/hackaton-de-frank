from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from django.db.models.query_utils import Q
from rest_framework import status
from .models import Client
from .pagination import SmallSetPagination
from .serializer import ClientSerializer, DeleteClientSerializer

# Create your views here.


class ClientList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):
        clients = Client.objects.all()
        paginator = SmallSetPagination()
        small_paginator_results = paginator.paginate_queryset(clients, request)

        if clients.exists():
            serializer_clients = ClientSerializer(
                small_paginator_results,
                many=True
            )
            return paginator.get_paginated_response({
                'Clients': serializer_clients.data
            })

        return Response({'erorr_message': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SearchByName(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):
        search_term = request.query_params.get('slug')

        print(f"search_term: {search_term}")

        clients = Client.objects.filter(name=search_term)

        paginator = SmallSetPagination()

        small_paginator_results = paginator.paginate_queryset(clients, request)

        if clients.exists:
            serializer_clients = ClientSerializer(
                small_paginator_results,
                many=True
            )

            return paginator.get_paginated_response({
                "Clients": serializer_clients.data
            })

        return Response({'erorr_message': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SearchByReputation(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):
        search_term = request.query_params.get('slug')

        clients = Client.objects.filter(reputation=search_term)

        paginator = SmallSetPagination()

        small_paginator_results = paginator.paginate_queryset(clients, request)

        if clients.exists:
            serializer_clients = ClientSerializer(
                small_paginator_results,
                many=True
            )

            return paginator.get_paginated_response({
                "Clients": serializer_clients.data
            })

        return Response({'erorr_message': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateClient(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=True):
        serializer = ClientSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({"response": serializer.data}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteClient(APIView):
    permission_classes = (permissions.AllowAny,)

    def delete(self, request, format=True):
        serializer = DeleteClientSerializer(data=request.data)

        if serializer.is_valid():
            try:
                deleted_client = Client.objects.get(
                    email=request.data["email"])
                deleted_client.delete()
            except:
                return Response({"message": "User not exist"}, status=status.HTTP_400_BAD_REQUEST)

            return Response({"message": "Client deleted successfully"}, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
