from django.urls import path
from .models import Student
from .views import students

urlpatterns = [
    path('books/', students),
]