from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('users', views.UsersList.as_view()),
    path('create-user', views.UserCreate.as_view()),
    path('user/delete/<int:id>', views.UserDestroy.as_view()),
    path('survey', views.SurveyList.as_view()),
    path('create-survey', views.SurveyCreate.as_view()),
    path('survey/delete/<int:id>', views.SurveyDestroy.as_view())
]
