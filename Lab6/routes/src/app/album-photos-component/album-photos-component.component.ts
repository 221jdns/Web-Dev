import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos-component',
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Photos</h2>
    <img *ngFor="let photo of photos" [src]="photo.thumbnailUrl">]
    <a routerLink = "/albums"> Return </a>
  `,
  styleUrl: './album-photos-component.component.css'
})
export class AlbumPhotosComponentComponent implements OnInit{
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(id).subscribe(data => this.photos = data);
  }
}
