import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LogoutComponent } from 'src/app/components/./logout/logout.component';
import { UserSubscriptionService } from 'src/app/services/user-subscription.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public appPages = [];

  public labels = [];

  usuario: Usuario;
  
  constructor(private usuarioService: UsuarioService,
              private userSubscriptionService: UserSubscriptionService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.createMenuTop();
    this.createMenuDown();

    //observa que si al el perfil o los roles del usuario se refresque el menu dinamico
    this.usuarioService.getUpdateUserObservable().subscribe((data) => {
      this.usuario = data;
      this.createMenuTop();
      this.createMenuDown();
    });


  }

  createMenuTop(){
    this.appPages = [];
    this.appPages.push({ title: 'Mi Cuenta', url: '/main/main/account', icon: 'person' });
    this.appPages.push( { title: 'Mis Mascotas', url: '/main/main/pet', icon: 'paw' });
    this.appPages.push( { title: 'Notificaciones',url:'', icon: 'notifications' });
    this.appPages.push(  { title: 'Favoritos',url:'', icon: 'star' });
    if(this.usuario.perfil === 'Propietario'){
      this.appPages.push( { title: 'Subscribirse', url:'/main/main/user-subscription', icon:'business-outline'});
    }
    if(this.usuario.perfil === 'Empresa'){
      this.appPages.push( { title: 'Administrar Negocio', url:'/main/main/store-manage', icon:'storefront-outline'});
    }
  }

  createMenuDown(){
    this.labels = [];
    this.labels.push({ title:'Eventos', url:'',icon:'calendar'});
    this.labels.push({ title:'Mascotas en adopcion',url:'',icon:'heart'});
    this.labels.push({ title: 'Cerrar Sesión', url: '/main/main/logout', icon: 'log-out' });
  }

}
