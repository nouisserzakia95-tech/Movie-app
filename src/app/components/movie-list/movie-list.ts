import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service';

@Component({
  imports: [],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList implements OnInit {
  movieService = inject(MovieService);

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((response) => {
      this.movieService.movieList = response;
      console.log(this.movieService.movieList);
    });
  }
}