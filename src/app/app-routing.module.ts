import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './swiftcash/containers/home/home.component';
import { LoginComponent } from './swiftcash/containers/login/login.component';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'home' },
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },

  { path: 'swiftcash', loadChildren: () => import('./swiftcash/swiftcash.module').then(m => m.SwiftCashModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
