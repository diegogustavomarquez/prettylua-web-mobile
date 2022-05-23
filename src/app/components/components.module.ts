import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AvatarSelectorComponent,
    LogoutComponent
  ],
  exports: [
    AvatarSelectorComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
