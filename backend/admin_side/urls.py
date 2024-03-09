from django.urls import path
from .views import AdminLoginView,AdminUsersView


urlpatterns = [
    path('admin_login', AdminLoginView.as_view(), name='admin_login'),
    path('admin_users', AdminUsersView.as_view(), name='admin_users')
]