import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  term = '';
  goToResults() {
    if (this.term === '') { return }
    this.searchResultsService.loading = true;
    this.searchResultsService.getResults(this.term)
      .subscribe({
        next: () => {
          this.searchResultsService.error = '';
          this.router.navigate(
            ['/search'],
            {queryParams: {q: this.term}}
          )
          this.searchResultsService.loading = false;
        },
        error: err => {
          this.router.navigate(
            ['/search'],
            {queryParams: {q: this.term}}
          );
          this.searchResultsService.error = err;
        }
      })
  }

  constructor(
    private router: Router,
    public searchResultsService: SearchResultsService) { }

  ngOnInit(): void {
  }

}
