import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '' , component:  ListComponent },
  { path: 'create' , component: CreateComponent },   
  { path: 'detail' , component: DetailComponent }     


 ];



@NgModule({
  declarations: [ListComponent, CreateComponent, DetailComponent],
  imports: [
    Ng5SliderModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContainersModule { }
