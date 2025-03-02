import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/albums.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums-component',
  imports: [CommonModule, RouterModule],
  template: `
  <h2>Albums</h2>
  <ul>
    <div *ngIf="this.onLoad" else #wait>
    <li *ngFor="let album of albums">
      <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
      <button (click)="deleteAlbum(album.id)">Delete</button>
    </li>
    </div>
    <div id="wait">...</div>
  </ul>
  `,
  styleUrl: './albums-component.component.css'
})
export class AlbumsComponentComponent implements OnInit {
  albums: any[] = [];
  onLoad: boolean = false;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(
      data => {
        this.albums = data; 
        this.onLoad = true;
      }
    );
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
