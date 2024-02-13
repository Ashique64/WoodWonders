from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    # TokenObtainPairSerializer receive a payload containing a username and password in order to generate a JSON Web Token (JWT) that can be used for authentication purposes.
    #  we can add any custom validation or processing logic that we need for our specific application. 
    
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user) #to get default token

        token['name'] = user.name
        
        return token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user 