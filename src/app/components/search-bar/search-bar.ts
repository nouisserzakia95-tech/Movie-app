import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../../service/movie-service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [FaIconComponent],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;

  movieService=inject(MovieService);

  getMovieByTitle(title: string) {
    this.movieService.getMovieList().subscribe(
      response => {
        this.movieService.movieList.set(
          response.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())));
      })

}

}