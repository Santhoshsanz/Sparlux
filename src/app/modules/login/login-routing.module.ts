import { LoginForgotComponent } from './login-forgot/login-forgot/login-forgot.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ForgotPassword',
    component: LoginForgotComponent
  },
  {
    path: 'PrivacyPolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
