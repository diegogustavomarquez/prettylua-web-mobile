import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSubscriptionPageRoutingModule } from './user-subscription-routing.module';

import { UserSubscriptionPage } from './user-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSubscriptionPageRoutingModule
  ],
  declarations: [UserSubscriptionPage]
})
export class UserSubscriptionPageModule {}
