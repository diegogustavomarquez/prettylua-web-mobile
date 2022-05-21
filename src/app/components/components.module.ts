import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { PipesModule } from '../pipes/pipes.module';
import { MapaComponent } from './mapa/mapa.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    AvatarSelectorComponent,
    MapaComponent,
    MenuComponent
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
