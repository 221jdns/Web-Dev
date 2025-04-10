import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  private url = 'http://127.0.0.1:8000/api/register/'
  constructor(private http: HttpClient) { }
  
  postRegis(data: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(this.url, data, { headers});
  }

  

}
