import { AuthGuard, Login } from './helpers/auth-guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/iop-module/iop-module.module').then(m => m.IopModuleModule),
  //   canActivate: []
  // },
  {
    path: '',
    loadChildren: () => import('./modules/sparlux-module/sparlux-module.module').then(m => m.SparluxModuleModule),
    canActivate: []
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: [Login]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
