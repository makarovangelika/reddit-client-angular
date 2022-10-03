import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: [
    '../card/card.component.css',
    './full-card.component.css'
  ]
})
export class FullCardComponent implements OnInit {

  @Input() post: Post;
  class = 'full-card-image';
  moment = moment;
  private fragment: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => this.fragment = fragment);
  }
  ngAfterViewInit(): void {
    try {
      let block = document.querySelector('#' + this.fragment)
      if (block !== null) {
        block.scrollIntoView();
      }
    } catch(e) {}
  }
}
