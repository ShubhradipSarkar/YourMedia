from django.shortcuts import render
from django.http import HttpResponse
from friends.models import User,Friends
from rest_framework import viewsets
from friends.serializers import Userserializer,Friendserializer

import requests

def update_user_coordinates(request):
    address = request.POST.get('address')  # Assuming you have an address input field

    # Make a request to the Google Maps Geocoding API
    response = requests.get(f'https://maps.googleapis.com/maps/api/geocode/json?address={address}&key=YOUR_API_KEY')

    if response.status_code == 200:
        data = response.json()

        if data['results']:
            result = data['results'][0]
            location = result['geometry']['location']

            # Retrieve latitude and longitude
            latitude = location['lat']
            longitude = location['lng']

            # Update the User object with the retrieved coordinates
            user = User.objects.get(id=request.user.id)  # Assuming you have authenticated users
            user.latitude = latitude
            user.longitude = longitude
            user.save()

            return HttpResponse('Coordinates updated successfully.')

    return HttpResponse('Unable to retrieve coordinates.')



class UserViewSet(viewsets.ModelViewSet):
     
    queryset=User.objects.all()
    serializer_class=Userserializer 
    #serializer=Userserializer(queryset,many=True)
    
class FriendsViewSet(viewsets.ModelViewSet):
     
    queryset=Friends.objects.all()
    serializer_class=Friendserializer 

