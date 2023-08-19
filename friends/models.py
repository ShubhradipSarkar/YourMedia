from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import F

class Ids(AbstractUser):
    name=models.CharField(max_length=255)
    email=models.CharField(max_length=255, unique=True)
    password=models.CharField(max_length=255)
    username=None
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

class User(models.Model):
    
    user_name=models.CharField(max_length=50)
    about=models.TextField()
    myId=models.IntegerField(primary_key=True)
    digit=models.IntegerField(default=0)
    city = models.CharField(max_length=100, default="city not set")
    college = models.CharField(max_length=100, default="college not provided")
    rltn=models.CharField(max_length=25, default="relationship status hidden")

class Friends(models.Model):
    self_id=models.IntegerField(null=True,blank=True)
    pika=models.IntegerField(null=True)
    friend_id=models.IntegerField(null=True,blank=True)
    class Meta:
        unique_together = ('self_id', 'friend_id')
        constraints = [
            models.CheckConstraint(check=~models.Q(self_id=models.F('friend_id')), name='not_equal_value')
        ]

class FriendRequests(models.Model):
    request_from = models.IntegerField()
    request_to = models.IntegerField()
    class Meta:
        unique_together = ('request_from', 'request_to')
        constraints = [
            models.CheckConstraint(check=~models.Q(request_from=models.F('request_to')), name='not_equal_values')
        ]
    def __str__(self):
        return f"First: {self.first_integer}, Second: {self.second_integer}"

class Posts(models.Model):
    
    self_id=models.IntegerField(null=True,blank=True)
    quote=models.CharField(max_length=500)

    


