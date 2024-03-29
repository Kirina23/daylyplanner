from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError(_('The Phone number must be set'))
        
        # Удалите или игнорируйте флаги is_staff и is_superuser
        extra_fields.pop('is_staff', None)
        extra_fields.pop('is_superuser', None)

        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(phone, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    phone = models.CharField(max_length=15, unique=True)
    login = models.CharField(max_length=50, unique=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    def get_short_name(self):
        # Возможная реализация: возвращаем телефон или логин, если он существует
        return self.login if self.login else self.phone

    def get_full_name(self):
        # Возможная реализация: возвращаем телефон, так как у нас нет отдельных полей для имени пользователя
        return self.phone

    def __str__(self):
        # Возвращаем удобное для чтения представление объекта, например, телефон
        return self.phone

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def __str__(self):
        return self.phone
