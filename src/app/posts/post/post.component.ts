import { Post } from './post.interface';
import { CardComponent } from './../../shared/card/card.component';
import { ResourceService } from './../../shared/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  list$;
  constructor(private resourceService: ResourceService, private cardComponent: CardComponent) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    //this.resourceService.getResponse<Post[]>(url, 'title').subscribe(console.log);//works
    this.list$ = this.resourceService.getResponse<Post[]>(url, 'title');
    //this.cardComponent.setList(list);
   }

  ngOnInit() {
  }
  
}
