import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'pet',
        loadChildren: () => import('./pet/pet.module').then( m => m.PetPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'user-subscription',
        loadChildren: () => import('./user-subscription/user-subscription.module').then( m => m.UserSubscriptionPageModule)
      },
      {
        path: 'store-manage',
        loadChildren: () => import('./store-manage/store-manage.module').then( m => m.StoreManagePageModule)
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
      },
      {
        path: '',
        redirectTo: '/main/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
