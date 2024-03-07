from django.contrib import admin
from django.urls import path
from accounts.views import UserCreateView, home, delete_user


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', UserCreateView.as_view(), name='register'),
    path('', home, name='home'),
    path('users/<int:user_id>/delete/', delete_user, name='delete_user'),
    # другие URL-адреса можно добавить здесь
]