import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from "../models/posts";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

export class PostService {
  postsUrl = "https://jsonplaceholder.typicode.com/todos";
  limit = "?_limit=10";
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.limit}`);
  }

  toggleCompleted(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put(url, post, httpOptions);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
}
