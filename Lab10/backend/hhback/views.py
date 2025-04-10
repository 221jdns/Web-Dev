from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
# from django.views import View
from .models import Company, Vacancy
from .serializer import CompanySerializer, VacancySerializer
# FBV


@api_view(['GET'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)

@api_view(['GET'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)
    
@api_view(['GET'])
def one_company(request, id):
    data = Company.objects.get(id = id)
    serializer = CompanySerializer(data)
    return Response(serializer.data)

@api_view(['GET'])
def vacancies_by_company(request, id):
    company = Company.objects.get(id=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many= True)
    return Response(serializer.data)

# CBV

class Vacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)

class OneVacancy(APIView):
    def get(self, request, id):
        vacancy = Vacancy.objects.get(id = id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

class TopVacancies(APIView):
    def get(self, request):
        top = Vacancy.objects.order_by("-salary")[:10]
        serializer =  VacancySerializer(top, many = True)
        return Response(serializer.data)