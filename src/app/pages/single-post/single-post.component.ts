import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit{
  postData: any;
  similarPostArray:Array<any> | undefined
  
  constructor(private route: ActivatedRoute, private postService: PostService){}

  ngOnInit(): void {
    this.route.params.subscribe(val=>{
          this.postService.loadOnePost(val['id']).then(post =>{
              this.postData = post;
              this.loadSimilarPost(this.postData.category.categoryId)
          })
    })
  }

  loadSimilarPost(catId: any){
    this.postService.loadSimilar(catId).subscribe(val=>{
         this.similarPostArray = val;
    })
  }

}
