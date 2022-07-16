from django.db import models


class User(models.Model):
    username = models.CharField('Username', max_length=20)
    password = models.CharField("Password", max_length=10)

    def __str__(self):
        return self.username


class Survey(models.Model):
    type_questions = models.CharField(max_length=10)
    num_key = models.CharField(max_length=100, default=0)
    number_question = models.IntegerField()
    qestion = models.CharField(max_length=100)
    ans1 = models.CharField(max_length=50)
    ans2 = models.CharField(max_length=50)
    ans3 = models.CharField(max_length=50)
    ans4 = models.CharField(max_length=50)

    def __str__(self):
        return self.type_questions
