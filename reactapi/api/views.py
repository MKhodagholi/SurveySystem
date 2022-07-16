from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView

from .serializers import SurveySerializers, UserSerializers
from .models import User, Survey


class UsersList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UserCreate(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UserDestroy(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class SurveyList(ListAPIView):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializers


class SurveyCreate(CreateAPIView):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializers


class SurveyDestroy(DestroyAPIView):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializers
