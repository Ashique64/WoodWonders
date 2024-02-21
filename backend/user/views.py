from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from .models import User
from .serializer import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import IntegrityError

# Create your views here.


class UserSignupView(generics.CreateAPIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                content = {'message': 'User registered successfully'}
                return Response(content, status=status.HTTP_201_CREATED)
            except IntegrityError as e:
                error_message = "User Name Already Exist"
                return Response({'error': error_message}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)
