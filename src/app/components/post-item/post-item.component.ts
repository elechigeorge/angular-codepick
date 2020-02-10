import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Post } from "src/app/models/posts";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"]
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit() {}

  // Set Classes
  setClasses() {
    let classes = {
      post: true,
      "is-completed": this.post.completed
    };

    return classes;
  }

  onToggle(post) {
    // toggle
    post.completed = !post.completed;

    // toggle on server
    this.postService.toggleCompleted(post).subscribe(post => console.log(post));
  }

  onDelete(post) {
    this.deletePost.emit(post);
  }
}
