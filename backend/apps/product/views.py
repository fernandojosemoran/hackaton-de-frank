from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .pagination import SmallSetPagination
from .serializer import ProductSerializer

# Create your views here.


class ProductList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=True):
        products = Product.objects.all()
        paginator = SmallSetPagination()
        small_paginator_results = paginator.paginate_queryset(
            products, request
        )

        if products.exists():
            serializer_products = ProductSerializer(
                small_paginator_results,
                many=True
            )
            return paginator.get_paginated_response({
                'products': serializer_products.data
            })

        return Response({'erorr_message': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
