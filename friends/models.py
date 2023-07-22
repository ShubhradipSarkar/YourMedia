from django.db import models



# Create your models here.

# connections model
class User(models.Model):
    user_id=models.AutoField(primary_key=True)
    user_name=models.CharField(max_length=50)
    about=models.TextField()
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

class Friends(models.Model):
    self_id=models.IntegerField(null=True,blank=True)
    friend_id=models.IntegerField(null=True,blank=True)



    


