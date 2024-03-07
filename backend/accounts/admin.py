from django.contrib import admin
from django.urls import reverse
from django.utils.safestring import mark_safe
from .models import CustomUser 

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['phone', 'password', 'delete_user']

    def delete_user(self, obj):
        delete_url = reverse('admin:accounts_customuser_delete', args=[obj.id])
        return mark_safe(f'<a href="{delete_url}">Delete</a>')

    delete_user.short_description = 'Delete User'

admin.site.register(CustomUser, CustomUserAdmin)