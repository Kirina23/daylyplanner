from django.contrib import admin
from django.urls import path, include
from accounts.views import UserCreateView  # Убедитесь, что этот путь верен
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from accounts.views import UserCreateView, home 

urlpatterns = [
    path('admin/', admin.site.urls),
    # Для упрощения, пути аутентификации сгруппированы в один include
    path('api/auth/', include([
        path('register/', UserCreateView.as_view(), name='register'),
        path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
        path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    ])),
    path('', home, name='home'),
]
