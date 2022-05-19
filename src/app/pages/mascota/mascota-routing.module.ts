import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mascotaPage } from './mascota.page';

const routes: Routes = [
  {
    path: '',
    component: mascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class MascotaRoutingModule { }
