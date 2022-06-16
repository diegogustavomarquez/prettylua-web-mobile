import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresPage } from './stores.page';

const routes: Routes = [
  {
    path: '',
    component: StoresPage
  },
  {
    path: 'stores-view/:id',
    loadChildren: () => import('./stores-view/stores-view.module').then( m => m.StoresViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresPageRoutingModule {}
