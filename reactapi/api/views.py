from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView

from .serializers import UserSerializers
from .models import User


class UsersList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UserCreate(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UserDestroy(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
