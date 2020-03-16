import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContentComponent } from './login/login-content/login-content.component';
import { PortalContentComponent } from './portal/portal-content/portal-content.component';

const routes: Routes = [
  { path: 'login', component: LoginContentComponent},
  { path: 'portal',  redirectTo: '/portal/inicio', pathMatch: 'full' } ,
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
