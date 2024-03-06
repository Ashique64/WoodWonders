from django.urls import path
from .views import UserSignupView, UserLoginView
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)


urlpatterns = [
    # path('', views.home , name='home'),
    path('signup', UserSignupView.as_view(), name='signup'),
    path('login', UserLoginView.as_view(), name="login"),
    path('token/obtain', TokenObtainPairView.as_view(), name="token-obtain"),
    path('token/refresh', TokenRefreshView.as_view(), name="token-refresh"),
] 