import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredPostsArray: Array<any> | undefined;
  
  latestPostArray: Array<any> | undefined;
  

  constructor(private postService: PostService){

    this.postService.loadFeatured().subscribe(val =>{

        this.featuredPostsArray = val;
       
    })



    
  }


  ngOnInit(): void {

    this.postService.loadFeatured().subscribe(val =>{

      this.featuredPostsArray = val;
     
  });
  this.postService.loadLatest().subscribe(val =>{

    this.latestPostArray = val;

  })

    
  }

}
