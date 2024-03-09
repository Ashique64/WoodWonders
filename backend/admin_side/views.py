from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.views import APIView
from user.models import Users

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
        



class AdminUsersView(APIView):
    
    def get(self, request):
        users = Users.objects.filter(is_superuser=False)
        user_data = []
        for user in users:
            user_data.append({
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'phone_number': user.phone_number,
                'is_active': user.is_active})
            
        return JsonResponse(user_data, safe=False)
    
    def post(self, request):
        user_id = request.data.get('user_id')
        print(user_id)
        action = request.data.get('action')
        print(action)
        
        try:
            user = Users.objects.get(id=user_id)
        except Users.DoesNotExist:
            return JsonResponse({"message": "User not found"}, status=404)
        
        if action == 'block':
            user.is_active = False
            user.save()
            return JsonResponse({"message": "User blocked successfully"})
        elif action == 'unblock':
            user.is_active = True
            user.save()
            return JsonResponse({"message": "User unblocked successfully"})
        else:
            return JsonResponse({"message": "Invalid action"}, status=400)
