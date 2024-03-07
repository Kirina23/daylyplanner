from django.shortcuts import render
from rest_framework import status, views
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect
from django.http import HttpResponseForbidden
from django.contrib.auth.decorators import permission_required
from accounts.models import CustomUser


def home(request):
    return HttpResponse("Welcome to Daylyplanner!")


class UserCreateView(views.APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Удаление пользователя из админки
@permission_required('accounts.delete_customuser')
def delete_user(request, user_id):
    # Находим пользователя в базе данных или возвращаем 404 ошибку, если пользователь не найден
    user = get_object_or_404(CustomUser, id=user_id)
    
    # Удаляем пользователя, если он не является суперпользователем
    if not user.is_superuser:
        user.delete()
        # Перенаправляем пользователя на страницу с пользователями или куда-то еще
        return redirect('users_list')
    else:
        # Если у пользователя нет разрешения на удаление пользователей, возвращаем ошибку доступа
        return HttpResponseForbidden("You don't have permission to delete users.")
