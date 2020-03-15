import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';







const routes: Routes = [
    {
        path: '' , pathMatch: 'full', redirectTo: 'home'
      },
    {
        path: 'signup' , component: SignupComponent
      },   
    {
        path: 'login' , component: LoginComponent
      },
      {
        path: '' , component: HomeComponent
      },
      { path : 'products' ,  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},

]










@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }