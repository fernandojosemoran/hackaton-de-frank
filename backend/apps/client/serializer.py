from rest_framework import serializers
from .models import Client


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = [
            'id',
            'name',
            'last_name',
            'phone',
            'email',
            'localitation',
            'reputation',
            'date_of_birth',
        ]


class ReceiveClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = [
            'name',
            'last_name',
            'phone',
            'email',
            'localitation',
            'reputation',
            'date_of_birth',
        ]


class DeleteClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = [
            'email',
        ]
