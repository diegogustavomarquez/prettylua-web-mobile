import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'account-form',
    loadChildren: () => import('./account-form/account-form.module').then( m => m.AccountFormPageModule)
  },
  {
    path: 'change-bussines',
    loadChildren: () => import('./change-bussines/change-bussines.module').then( m => m.ChangeBussinesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
