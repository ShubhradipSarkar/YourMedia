from django.contrib import admin
from django.urls import path, include
from friends.views import UserViewSet,FriendsViewSet,PostsViewSet
from rest_framework import routers
from . import views

router=routers.DefaultRouter()
router.register(r'Userss',UserViewSet)
router.register(r'Friends',FriendsViewSet)
router.register(r'Posts',PostsViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('Userss/<int:user_id>/', views.get_user_by_id, name='get_user_by_id'),
    #path('Posts/<int:user_id>/', views.get_post_by_id, name='get_post_by_id'),
]
 