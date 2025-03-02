import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail-component',
  imports: [CommonModule, FormsModule, RouterModule], 
  template: `
    <h2>Album Details</h2>
    <p>Title: <input [(ngModel)]="newTitle"></p>
    <button (click)="saveTitle()">Save</button>
    <button (click)="goBack()">Return</button>
    <a *ngIf="album.id" [routerLink]="['/albums', album.id, 'photos']">Photos</a>
  `,
  styleUrl: './album-detail-component.component.css'
})
export class AlbumDetailComponentComponent implements OnInit {
  album: any = {};
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(
      data => {
        this.album = data;
        this.newTitle = data.title;
        console.log('here');
      }, (error) => {
        console.log(error);
      }
    );
  }

  saveTitle(): void {
    this.albumsService.updateAlbum(this.album.id, this.newTitle).subscribe(data => {
      this.album = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}

