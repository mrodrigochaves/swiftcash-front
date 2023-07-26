import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './swiftcash/containers/home/home.component';
import { LoginComponent } from './swiftcash/components/login/login.component';
import { TaxComponent } from './swiftcash/components/tax/tax.component';
import { SolutionComponent } from './swiftcash/components/solution/solution.component';
import { HelpComponent } from './swiftcash/components/help/help.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'help', component: HelpComponent },
  { path: 'swiftcash', loadChildren: () => import('./swiftcash/swiftcash.module').then(m => m.SwiftCashModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
