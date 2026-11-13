import { Routes } from '@angular/router';
import { MovieList } from './components/movie-list/movie-list';
import { MovieDetail } from './components/movie-detail/movie-detail';
import { WishList } from './components/wish-list/wish-list';

export const routes: Routes = [
  { path: '', component: MovieList },
  { path: 'wish-list', component: WishList },
  { path: 'movie/:id', component: MovieDetail },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];