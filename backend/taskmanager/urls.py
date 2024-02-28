from django.contrib import admin
from django.urls import path
from accounts.views import UserCreateView, home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', UserCreateView.as_view(), name='register'),
    path('', home, name='home'),
    # другие URL-адреса можно добавить здесь
]