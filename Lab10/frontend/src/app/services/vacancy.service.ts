import { Injectable } from '@angular/core';
import { Vacancy } from '../models/vacancy';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/companies/';

  constructor(private http: HttpClient) {}

  getVacancies(company: Company): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}${company.id}/vacancies/`);
  }
}
