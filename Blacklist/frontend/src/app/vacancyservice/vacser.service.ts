import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../vacancy';
import { HttpContext } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VacserService {
  private url = "http://localhost:8000/api/vacancy/"
  constructor(private http: HttpClient) { }
  
  getVacancies():Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(this.url)
  }


}
