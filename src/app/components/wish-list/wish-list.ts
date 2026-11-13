import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie-service';
import { Movie } from '../../interfaces/movie';

@Component({
  imports: [],
  selector: 'app-wish-list',
  styleUrl: './wish-list.css',
  templateUrl: './wish-list.html',
})
export class WishList {
  movieService = inject(MovieService);
  private router = inject(Router);

  navigateTo(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }

  backToMovieList() {
    this.router.navigate(['/']);
  }

  remove(event: Event, movie: Movie) {
    event.stopPropagation();
    this.movieService.removeFromWishList(movie.id);
  }
}