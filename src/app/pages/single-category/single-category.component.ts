import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent implements OnInit{
   postsArray: Array<any> | undefined;
   categoryObj : any;

   constructor(private route: ActivatedRoute, private postService:PostService){}

   ngOnInit(): void {

    this.route.params.subscribe(val=>{
        this.categoryObj = val;
        this.postService.loadCategoryPosts(val['id']).subscribe(post =>{
            this.postsArray = post;
        })
    })
     
   }


}
