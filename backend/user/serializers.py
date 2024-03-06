from rest_framework import serializers
from .models import Users
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password


    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        token = super().validate(attrs)
        return token



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

    def create(self, validated_data):    
        validated_data["password"] = make_password(validated_data["password"])
        user = Users.objects.create(**validated_data)
        return user