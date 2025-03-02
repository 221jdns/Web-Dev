import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AlbumDetailComponentComponent } from './album-detail-component/album-detail-component.component';
import { AlbumPhotosComponentComponent } from './album-photos-component/album-photos-component.component';
import { AlbumsComponentComponent } from './albums-component/albums-component.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponentComponent
    },
    {
        path:'about',
        component:AboutComponentComponent
    },
    {
        path:'albums',
        component:AlbumsComponentComponent
    },
    {
        path:'albums/:id',
        component:AlbumDetailComponentComponent
    },
    {
        path:'albums/:id/photos',
        component:AlbumPhotosComponentComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'

    },

];

export class AppModule {}
