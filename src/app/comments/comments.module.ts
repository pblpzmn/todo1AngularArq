import { CardComponent } from './../shared/card/card.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [CommentComponent],
  exports: [CommentComponent]
})
export class CommentsModule { }
