import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './dashboard/dashboard.module'


const routes: Routes = [{
  path:'',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
},
{
  path:'cart',
  loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
},
{
  path:'billing',
  loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule),
},
{
  path:'my-orders',
  loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersModule),
},
{
  path:'my-profile',
  loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule),
},
{
  path:'pdp',
  loadChildren: () => import('./pdp/pdp.module').then(m => m.PdpModule),
},
{
  path:'plp',
  loadChildren: () => import('./plp/plp.module').then(m => m.PlpModule),
},
{
  path:'thank-you',
  loadChildren: () => import('./thank-you/thank-you.module').then(m => m.ThankYouModule),
},
{
  path:'wish-list',
  loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule),
},
{
  path:'tracking',
  loadChildren: () => import('./tracking/tracking.module').then(m => m.TrackingModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparluxModuleRoutingModule { }
