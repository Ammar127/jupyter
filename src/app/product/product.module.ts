import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '' , component:  ListComponent },
  { path: 'view' , component: ViewComponent }     

    

  
 ];
@NgModule({
  declarations: [ViewComponent, ListComponent],
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes)

  ]
})
export class ProductModule { }
