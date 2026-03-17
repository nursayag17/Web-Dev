import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AlbumsComponent } from './components/albums/albums';
import { AlbumDetail } from './components/album-detail/album-detail';
import { AlbumPhotosComponent } from './components/album-photos/album-photos';

export const routes: Routes = [

{ path: 'home', component: HomeComponent },

{ path: 'about', component: AboutComponent },

{ path: 'albums', component: AlbumsComponent },

{ path: 'albums/:id', component: AlbumDetail},

{ path: 'albums/:id/photos', component: AlbumPhotosComponent },

{ path: '', redirectTo: '/home', pathMatch: 'full' }

];