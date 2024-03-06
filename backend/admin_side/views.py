from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.views import APIView

class AdminLoginView(APIView):
    
    def post(self, request):
        admin_username = request.data.get('username')
        admin_password = request.data.get('password')
        
        user = authenticate(request, username=admin_username, password=admin_password)
        
        if user is not None and user.is_superuser:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"message": "Invalid credentials"}, status=401)
