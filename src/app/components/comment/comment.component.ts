import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/fullPost';
import * as moment from 'moment';

interface Reply {
  kind: string,
  data: Comment
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  replies: Reply[];
  moment = moment;

  constructor() { }

  ngOnInit(): void {
    if (this.comment.replies) {
      this.replies = this.comment.replies.data.children.filter(reply => reply.kind !== 'more');
    }
  }

}
