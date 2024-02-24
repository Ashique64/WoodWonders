from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from .models import User
from .serializer import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import IntegrityError
from . import verify
from django.db import transaction

# Create your views here.


class UserSignupView(generics.CreateAPIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                with transaction.atomic():
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
                    if verify.send_otp(phoneNumber):
                        content = {'message': 'User registered successfully. OTP sent to your phone number.'}
                        return Response(content, status=status.HTTP_201_CREATED)
                    else:
                        transaction.set_rollback(True)
                        return Response({'error': "Failed to send OTP. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            except IntegrityError as e:
                return Response({'error': "An error occurred. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)
