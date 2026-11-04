import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../service/movie-service';

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

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe({
      next: (response) => {
        this.movieService.movieList = response;
        this.cdr.markForCheck();
        console.log('Movies loaded:', response);
      },
    });
  }
}
