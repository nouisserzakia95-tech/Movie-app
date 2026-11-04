import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieService } from '../../service/movie-service';

@Component({
  imports: [],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList implements OnInit {
  protected readonly movieService = inject(MovieService);
  protected readonly loading = signal(true);
  protected readonly error = signal('');
  protected readonly imageBase = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe({
      next: (movies) => {
        this.movieService.movieList.set(movies);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(`Erreur API : ${err.status} - ${err.message}`);
        this.loading.set(false);
      },
    });
  }
}