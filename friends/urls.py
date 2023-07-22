from django.contrib import admin
from django.urls import path, include
from friends.views import UserViewSet,FriendsViewSet
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'Userss',UserViewSet)
router.register(r'Friends',FriendsViewSet)

urlpatterns = [
    path('',include(router.urls))
]
 