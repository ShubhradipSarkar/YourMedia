from rest_framework import serializers
from friends.models import User,Friends

class Userserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields="__all__"

class Friendserializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Friends
        fields="__all__"
        
