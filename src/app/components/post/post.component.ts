import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from 'src/app/services/post.service';
import { Comment } from '../../models/fullPost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  comments: Comment[];
  postId: string;
  loading = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('postId') as string;
    });
    this.loading = true;
    this.postService.getPost(this.postId)
      .subscribe(fullPost => {
        this.loading = false;
        this.post = fullPost.post;
        this.comments = fullPost.comments;
      });
  }

}
