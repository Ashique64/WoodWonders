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

        return self.create_user(email, password, **extra_fields)
    
    
class User(AbstractBaseUser):
    
    user_name = models.CharField(unique=True, max_length=100)
    first_name = models.CharField(max_length=100 , null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=12, unique=True)
    password = models.CharField(max_length=150)
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    objects = UserManager()     # set to an instance of a custom manager 

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'email']

    def __str__(self):
        return self.email

    # def has_perm(self, perm, obj=None):
    #     return self.is_superuser

    # def has_module_perms(self, add_label):
    #     return True