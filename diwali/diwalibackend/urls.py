from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('aboutus/', views.aboutus, name="aboutus"),
    path('chat/<chat_id>', views.chat),
    path('api/gallery', views.gallery_pages),
    path('api/gallery/<year>', views.gallery),
    path('api/sponsors', views.sponsors_pages),
    path('api/sponsors/<year>', views.sponsors),
    path('api/carousel', views.carousel),
]
