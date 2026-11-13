
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { signal } from '@angular/core';

import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movie';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly http = inject(HttpClient);
  private readonly url = environment.url_api;
  private readonly key = environment.api_key;
  private readonly movieUrl = environment.url_movie_api;

  public movieList=signal<Movie[]>([]);
  public selectedMovie=signal<Movie | null>(null);
  public wishList=signal<Movie[]>([]);

  getMovieList(): Observable<Movie[]> {
    return this.http
      .get<MovieResponse>(`${this.url}now_playing?api_key=${this.key}`)
      .pipe(
        map(response => response.results)
        
      );
  }
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.movieUrl}${id}?api_key=${this.key}`).pipe(
      map(response => response)
    );
  }
  private loadWishList(): Movie[] {
    try {
      return JSON.parse(localStorage.getItem('wishList') ?? '[]');
    } catch {
      return [];
    }
  }

  private saveWishList() {
    localStorage.setItem('wishList', JSON.stringify(this.wishList()));
  }

  isInWishList(id: number): boolean {
    return this.wishList().some(m => m.id === id);
  }

  addToWishList(movie: Movie) {
    if (this.isInWishList(movie.id)) return;
    this.wishList.update(list => [...list, movie]);
    this.saveWishList();
  }

  removeFromWishList(id: number) {
    this.wishList.update(list => list.filter(m => m.id !== id));
    this.saveWishList();
  }
}

