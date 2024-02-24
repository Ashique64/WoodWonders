from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from .models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import IntegrityError
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from .serializers import CustomTokenObtainPairSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny


# Create your views here.


class UserSignupView(generics.CreateAPIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                userName = serializer.validated_data.get('user_name')
                phoneNumber = serializer.validated_data.get('phone_number')
                email = serializer.validated_data.get('email')

                if User.objects.filter(user_name=userName).exists():
                    return Response({"error": "Username already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
                if User.objects.filter(phone_number=phoneNumber).exists():
                    return Response({"error": "Phone Number already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
                if User.objects.filter(email=email).exists():
                    return Response({"error": "Email already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)

                serializer.save()
                content = {
                    "status": "success",
                    "message": "User registered successfully",
                    "user": serializer.data,
                }
                return Response(content, status=status.HTTP_201_CREATED)

            except IntegrityError as e:
                return Response({'error': "An error occurred. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)


@method_decorator(csrf_exempt, name='dispatch') #view is accessible without requiring a CSRF token.
@permission_classes([AllowAny])
class UserLoginView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                refresh = RefreshToken.for_user(user)
                serializer = UserSerializer(user)
                content = {
                    "status": "success",
                    "message": "Login successful",
                    "user": serializer.data,
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                }
            return Response(content, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)