from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
    
    # TokenObtainPairSerializer receive a payload containing a username and password in order to generate a JSON Web Token (JWT)
    # that can be used for authentication purpose
    
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, user):
        token = super().validate(user)
        token['name'] = user.name
        
        return token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
            user.save()
            return user
        else:
            raise serializers.ValidationError("Error") 