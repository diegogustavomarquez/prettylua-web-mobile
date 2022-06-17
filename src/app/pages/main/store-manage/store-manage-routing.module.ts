import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreManagePage } from './store-manage.page';

const routes: Routes = [
  {
    path: '',
    component: StoreManagePage
  },
  {
    path: 'store-form',
    loadChildren: () => import('./store-form/store-form.module').then( m => m.StoreFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreManagePageRoutingModule {}
