from django.urls import path
from .views import GetProductList, CreateProduct, DeleteProduct, SearchProductByCategory

urlpatterns = [
    path('products/', GetProductList.as_view(), name="product_list"),
    path('create-product', CreateProduct.as_view(), name="create-product"),
    path(
        'delete-product/product/<int:product_id>/',
        DeleteProduct.as_view(),
        name="delete-product"
    ),
    path(
        'search/product',
        SearchProductByCategory.as_view(),
        name="search-product-by-category"
    ),
]
