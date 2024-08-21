from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('apps.client.urls')),
    path('', include('apps.product.urls')),
    # path('', include('apps.user.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('admin/', admin.site.urls),
]
