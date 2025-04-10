import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:8000/api/company/'

  constructor(private http: HttpClient) { }

  getCompany():Observable<Company[]>{
    return this.http.get<Company[]>(this.url);
  }
}
