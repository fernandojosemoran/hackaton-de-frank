from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models.query_utils import Q
from .models import Product
from .pagination import SmallSetPagination
from .serializer import CreateProductSerializer, GetProductSerializer, ProductIdSerializer

# Create your views here.


class GetProductList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):

        try:
            products = Product.objects.all()
            paginator = SmallSetPagination()
            small_paginator_results = paginator.paginate_queryset(
                products, request
            )

            if products.exists():
                serializer_products = GetProductSerializer(
                    small_paginator_results,
                    many=True
                )

                return paginator.get_paginated_response({
                    'products': serializer_products.data
                })

            return Response(serializer_products.errors, status=status.HTTP_400_BAD_REQUEST)

        except:
            Response(
                {"error": "Internal server erorr"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class SearchProductByCategory(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):
        try:
            search_term = request.query_params.get('category')

            paginator = SmallSetPagination()

            products = Product.objects.filter(category=search_term)

            if products.exists():
                small_pagination_results = paginator.paginate_queryset(
                    products, request
                )

                serializer = GetProductSerializer(
                    small_pagination_results,
                    many=True
                )

                return paginator.get_paginated_response({
                    "products": serializer.data
                })

            return Response({"message": "products not exists"}, status=status.HTTP_400_BAD_REQUEST)

        except:
            Response(
                {"error": "Internal server erorr"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class CreateProduct(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=True):
        try:
            serializer_products = CreateProductSerializer(data=request.data)

            if serializer_products.is_valid():
                serializer_products.save()
                return Response({"message": "Product created successfully"}, status=status.HTTP_201_CREATED)

            return Response(serializer_products.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response(
                {"error": "Internal server error", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class DeleteProduct(APIView):
    permission_classes = (permissions.AllowAny,)

    def delete(self, request, product_id, format=True):
        # print(
        #     f"request.META.get('QUERY_STRING', False):
        #     {
        #         request.META.get('QUERY_STRING', False)
        #     }"
        # )

        # product_id = request.GET.get("id")
        try:
            serializer = ProductIdSerializer(data=product_id)
            if serializer.is_valid():

                product_to_delete = Product.objects.filter(id=product_id)
                product_to_delete.delete()

                return Response({"response": "Product deletected successfully"}, status=status.HTTP_301_MOVED_PERMANENTLY)

            Response(
                serializer.errors,
                status=status.status.HTTP_400_BAD_REQUEST
            )

        except:
            Response(
                {"error": "Internal server erorr"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
