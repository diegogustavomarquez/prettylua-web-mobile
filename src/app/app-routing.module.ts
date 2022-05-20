
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';


const routes: Routes = [


  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.component').then( m => m.MenuComponent)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'mascota',
    loadChildren: () => import('./pages/mascota/mascota.module').then( m => m.MascotaModule)
  },
 
  {
    path: 'servicio',
    loadChildren: () => import('./pages/servicio/servicio.module').then( m => m.ServicioPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then(m => m.Tab1PageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
  { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
