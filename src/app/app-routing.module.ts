import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { AuthGuard } from './_gaurds/auth.gaurd';







const routes: Routes = [
  {  path: '' , pathMatch: 'full', redirectTo: 'login' },
  {  path: 'signup', component: SignupComponent  },
  {  path: 'login', component: LoginComponent  },
  {
    path: 'app', component: CoreComponent, children: [

      { path: '', component: HomeComponent },
      { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      { path: 'containers', loadChildren: () => import('./containers/containers.module').then(m => m.ContainersModule) },

    ]
  }
]










@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }