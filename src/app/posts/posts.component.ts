
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';



@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post = {
    id :0,
    title :'',
    body : '',
    userId : ''
  };

  posts: any[] = [];
  status =true ;

  constructor(private postService : PostService) { 
   
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAll()
   .subscribe(
     (posts: any[]) => this.posts = posts 
   ,(error : Response)=> {
    alert('error unexpected')
   });
   
  }
  
  createPost(){
    this.postService.create(this.post)
    .subscribe((newPost: { id: number; }) =>{
      this.post.id = newPost.id;
      this.posts.unshift(this.post);
      this.post ={
    id :0,
    title :'',
    body : '',
    userId : ''
  };
    },(error : AppError ) => {
      if(error instanceof BadInput){
        alert('merci de verifier vous information')
      }else{
        alert('create nor succefly')
      }
    })
  }

  editPost(post : any){
    this.post = post ;
    this.status = false;
  }

  updatePost(){
   this.postService.update(this.post)
  .subscribe(() => {
    this.post = {
      id :0,
      title :'',
      body : '',
      userId : ''
    };
    this.status = true ;
  }, (error : Response) => {
    alert('error update')
  })
}

deletePost(post :any){
   this.postService.delete(post)
  .subscribe(() =>{
    let index = this.posts.indexOf(post);
    this.posts.splice(index , 1);
  },(error : AppError) =>{
    if(error instanceof NotFoundError){
      alert('ce post est déja supprimer')
    }else{
      alert('delete error')
    }
  })
}

}
