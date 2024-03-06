from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager

# Create your models here.

class UserManager(BaseUserManager):
    
    def create_user(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)

        return self.create_user(email, password, **extra_fields)
    
    
class Users(AbstractBaseUser):
    
    username = models.CharField(unique=True, max_length=100)
    first_name = models.CharField(max_length=100 , null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=13, unique=True, null=True, blank=True)
    password = models.CharField(max_length=150)
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    objects = UserManager() 

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj=None):  #if the user has the specified permission. In this case, it always returns True for superusers.
        return self.is_superuser

    def has_module_perms(self, app_label): #if the user has permission to view the admin module for the given app label. Again, it always returns True for superusers.
        return self.is_superuser