
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: '',
    pathMatch : 'full',
    redirectTo: '/main/main/home'
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
