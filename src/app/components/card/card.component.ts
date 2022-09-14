import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: Post;
  @Input() showSubreddit: boolean;

  moment = moment;

  ngOnInit(): void {
  }

}
