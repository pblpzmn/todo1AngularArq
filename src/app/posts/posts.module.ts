import { CardComponent } from './../shared/card/card.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [PostComponent],
  exports: [PostComponent],
  providers: [CardComponent],
})
export class PostsModule { }
