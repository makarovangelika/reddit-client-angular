import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [
    './search-results.component.css',
    '../subreddit/subreddit.component.css',
    '../card/card.component.css'
  ]
})
export class SearchResultsComponent implements OnInit {

  term = '';

  constructor(
    private route: ActivatedRoute,
    public searchResultsService: SearchResultsService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.term = params['q'];
      })
    if (!this.searchResultsService.results) {
      if (this.term === '') {
        this.router.navigate(['/']);
      }
      this.searchResultsService.loading = true;
      this.searchResultsService.getResults(this.term)
        .subscribe({
          next: () => {
            this.searchResultsService.loading = false;
          },
          error: err => this.searchResultsService.error = err
        });
    }
  }

}
