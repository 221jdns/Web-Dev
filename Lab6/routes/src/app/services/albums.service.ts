import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  private updatedAlbums: { [key: number]: string } = {};

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(album => {
        if (this.updatedAlbums[id]) {
          album.title = this.updatedAlbums[id]; 
        }
        return album;
      })
    );
  }

  updateAlbum(id: number, title: string): Observable<any> {
    this.updatedAlbums[id] = title; 
    return this.http.put<any>(`${this.apiUrl}/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
  
}
