import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as moment from 'moment';

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

  constructor() { }

  ngOnInit(): void {
  }

}
