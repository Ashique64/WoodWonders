
from django.urls import path
from .views import UserSignupView


urlpatterns = [
    # path('', views.home , name='home'),
    path('signup', UserSignupView.as_view() , name='signup'),
]

