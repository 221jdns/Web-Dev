from django.shortcuts import render
from .models import Student
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)
