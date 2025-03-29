from django.shortcuts import render
from .models import Company, Vacancy
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import CompanySerializer, VacancySerializer

@api_view(['GET'])
def company_list(request):
    data = Company.objects.all()
    serializer = CompanySerializer(data, many = True)
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

@api_view(['GET'])
def vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def one_vacancy(request , id):
    vacancy = Vacancy.objects.get(id = id)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])
def top_vacancies(request):
    top = Vacancy.objects.order_by("-salary")[:10]
    serializer =  VacancySerializer(top, many = True)
    return Response(serializer.data)






