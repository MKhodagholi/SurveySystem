from dataclasses import fields
from rest_framework import serializers
from .models import Survey, User


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')


class SurveySerializers(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ('type_questions', 'number_question', 'qestion',
                  'id', 'ans1', 'ans2', 'ans3', 'ans4')
