import { ResourceService } from './resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [CardComponent],
  providers: [ResourceService],
  exports: [CardComponent],
})
export class SharedModule { }
