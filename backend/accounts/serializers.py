from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('phone', 'password')  # Убран email, если он не используется
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Создание пользователя с хешированием пароля
        user = User.objects.create_user(**validated_data)
        return user
