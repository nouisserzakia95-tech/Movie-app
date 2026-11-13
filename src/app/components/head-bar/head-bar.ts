import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilm, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
@Component({
  imports: [FaIconComponent],
  selector: 'app-head-bar',
  styleUrl: './head-bar.css',
  templateUrl: './head-bar.html',
})
export class HeadBar {
  faFilm = faFilm;
  faHeart = faHeart;
  router = inject(Router);
  navigateToWishlist() {
    this.router.navigate(['/wish-list']);
  }

}