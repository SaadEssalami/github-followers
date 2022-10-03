import { NgModule } from "@angular/core";
import { Routes , RouterModule } from  '@angular/router';
import { GithubFollowersComponent } from "./github-followers/github-follower.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostsComponent } from "./posts/posts.component";
import { ProfileFollowerComponent } from "./profile-follower/profile-follower.component";

const routes : Routes =[
    { 
        path : "home" ,
         component : HomeComponent
      },
      { 
        path : "followers" , 
        component : GithubFollowersComponent
      },
      { 
        path : "followers/:id/:username" , 
        component : ProfileFollowerComponent 
      },
      { 
        path : "posts" , 
        component : PostsComponent
      },
      { 
        path : "**" , 
        component : PageNotFoundComponent
      }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class RoutingModule {}