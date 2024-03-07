from django.shortcuts import render
from rest_framework import status, views
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect
from django.http import HttpResponseForbidden


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
def delete_user(request, user_id):
    # Проверяем, имеет ли текущий пользователь права на удаление других пользователей
    if request.user.has_perm('auth.delete_user'):
        # Находим пользователя в базе данных или возвращаем 404 ошибку, если пользователь не найден
        user = get_object_or_404(User, id=user_id)
        # Удаляем пользователя
        user.delete()
        # Перенаправляем пользователя на страницу с пользователями или куда-то еще
        return redirect('users_list')
    else:
        # Если у пользователя нет разрешения на удаление пользователей, возвращаем ошибку доступа
        return HttpResponseForbidden("You don't have permission to delete users.")