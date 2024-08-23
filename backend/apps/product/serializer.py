from rest_framework import serializers
from .models import Product


class CreateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'category',
            'quantity',
            'slug',
            'image',
            'description',
        ]


class GetProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'category',
            'quantity',
            'slug',
            'image',
            'description',
        ]


class ProductIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id'
        ]
