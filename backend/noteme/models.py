from django.db import models
from django.core.validators import MinLengthValidator

class Note(models.Model):
    title = models.CharField(max_length=30, validators=[MinLengthValidator(1)])
    body = models.TextField(blank=True)
