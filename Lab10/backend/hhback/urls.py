from django.urls import path
from .views import company_list,  one_company,vacancies_by_company ,vacancy_list, Vacancies, OneVacancy, TopVacancies

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', one_company),
    path('companies/<int:id>/vacancies/', vacancies_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', OneVacancy.as_view()),
    path('top/', TopVacancies.as_view()),
]