from django.shortcuts import render
from .models import Company, Vacancy, Label, Artist
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import CompanySerializer, VacancySerializer, LabelSerializer, ArtistSerializer

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


@api_view(['GET'])
def labels(request):
    labels = Label.objects.all()
    serializer = LabelSerializer(labels, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def one_label(request, id):
    label = Label.objects.get(id = id)
    serializer = LabelSerializer(label)
    return Response(serializer.data)

@api_view(['GET'])
def artists_by_label(request, id):
    label = Label.objects.get(id = id)
    artists = label.artists.all()
    serializer = ArtistSerializer(artists, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def artists(request):
    artists = Artist.objects.all()
    serializer = ArtistSerializer(artists, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def artist(request, id):
    artist = Artist.objects.get(id = id)
    serializer = ArtistSerializer(artist)
    return Response(serializer.data)

@api_view(['GET'])
def top_artist(request):
    artist = Artist.objects.order_by("income")[:10]
    serializer = ArtistSerializer(artist, many = True)
    return Response(serializer.data)





