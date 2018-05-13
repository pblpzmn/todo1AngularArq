import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() item;

  constructor() { 
  console.log('constructor card');
  
  }
/*
  setList(list){
    console.log('setting list');
    //console.log(list);
    //this.list$ = [{title: 23 },{title: 25}];
    //list.subscribe(console.log);
    this.list$ = list;
    console.log(this.list$);
    //list.subscribe(data => this.list$ = data);
    //list.subscribe(data => console.log('new list values', data));
    //console.log(this.list$);
  }*/

  ngOnInit() {
  }

}
