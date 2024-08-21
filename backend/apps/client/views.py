from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from django.db.models.query_utils import Q
from rest_framework import status
from .models import Client
from .pagination import SmallSetPagination
from .serializer import ClientSerializer

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


class SearchByLastName(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):
        search_term = request.query_params.get('slug')

        clients = Client.objects.filter(last_name=search_term)

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
