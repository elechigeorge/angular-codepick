import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./components/posts/posts.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  { path: "", component: PostsComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
