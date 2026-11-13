import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../service/movie-service';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList implements OnInit {


  movieService = inject(MovieService);
  private readonly cdr = inject(ChangeDetectorRef);
  router = inject(Router);

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe({
      next: (response) => {
        this.movieService.movieList.set(response);
        this.cdr.markForCheck();
        console.log('Movies loaded:', response);
      },
    });
  }
  navigateTo(movie: Movie) {
  this.router.navigate(['/movie', movie.id]);
}

}
