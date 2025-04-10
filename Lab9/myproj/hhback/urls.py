from django.urls import path
from .views import company_list,  one_company,vacancies_by_company,vacancies,one_vacancy
urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', one_company),
    path('companies/<int:id>/vacancies/', vacancies_by_company),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', one_vacancy)
]