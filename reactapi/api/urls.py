from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('users', views.UsersList.as_view()),
    path('create-user', views.UserCreate.as_view()),
    path('delete/<int:id>', views.UserDestroy.as_view())
]
