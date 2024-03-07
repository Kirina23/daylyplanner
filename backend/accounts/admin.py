from django.contrib import admin
from django.urls import reverse
from django.utils.safestring import mark_safe
from .models import CustomUser 

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['phone', 'password']

admin.site.register(CustomUser, CustomUserAdmin)