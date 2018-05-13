import { CardComponent } from './../../shared/card/card.component';
import { Comment } from './comments.inteface';
import { ResourceService } from './../../shared/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  list$;
  constructor(private resourceService: ResourceService , private cardComponent: CardComponent) {
    console.log('comment constructor');
    const url = 'https://jsonplaceholder.typicode.com/comments';
    //this.resourceService.getResponse<Comment[]>(url, 'name').subscribe(console.log);//works
    this.list$ = this.resourceService.getResponse<Comment[]>(url, 'name');
   }

  ngOnInit() {
  }

}
