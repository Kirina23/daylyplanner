from django.shortcuts import render
from rest_framework import status, views
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.http import HttpResponse

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


