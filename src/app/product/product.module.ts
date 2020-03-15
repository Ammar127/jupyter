import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [ViewComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
