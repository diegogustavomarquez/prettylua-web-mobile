import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreManagePage } from './store-manage.page';

const routes: Routes = [
  {
    path: '',
    component: StoreManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreManagePageRoutingModule {}
