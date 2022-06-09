import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSubscriptionPage } from './user-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: UserSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSubscriptionPageRoutingModule {}
