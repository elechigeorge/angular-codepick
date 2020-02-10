import { Component, OnInit } from "@angular/core";

import { Post } from "../../models/posts";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter(t => t.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }

  addPost(post: Post) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.unshift(post);
    });
  }
}
