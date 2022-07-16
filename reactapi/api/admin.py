from django.contrib import admin

from .models import Survey, User


@admin.register(User)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')


@admin.register(Survey)
class SurveyModelAdmin(admin.ModelAdmin):
    list_display = ('type_questions', 'number_question',
                    'qestion', 'id', 'ans1', 'ans2', 'ans3', 'ans4')
