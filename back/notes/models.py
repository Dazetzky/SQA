from django.db import models

class Note(models.Model):
    name = models.CharField(max_length=500)
    username = models.CharField(max_length=24)
    userid = models.IntegerField()

    
