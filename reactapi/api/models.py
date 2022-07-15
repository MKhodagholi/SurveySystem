from django.db import models


class User(models.Model):
    username = models.CharField('Username', max_length=20)
    password = models.CharField("Password", max_length=10)

    def __str__(self):
      return self.username;
