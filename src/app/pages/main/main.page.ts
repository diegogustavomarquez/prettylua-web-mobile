import { Component, OnInit } from '@angular/core';
import { Store, Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StoreService } from 'src/app/services/store.service';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  respuesta: any;
  readonly VAPID_PUBLIC_KEY = "BDoY7Ap872g9qjnRrNQeQp58HMzw-6dQ9JyLWmozepSmGUPFeTNNwqe30SXQFLs1W1sEIE1klNWU9UppOdnvpVY";

  public appPages = [];

  public labels = [];

  usuario: Usuario;
  store: Store;

  constructor(private usuarioService: UsuarioService,
              private storeService: StoreService,
              private swPush: SwPush) { }

  async ngOnInit() {
    this.usuario = this.usuarioService.usuario;

    if(this.usuario.perfil === 'Empresa'){
      await this.storeService.findByUserId(this.usuario._id).then(p => this.store = p);
    }

    this.createMenuTop();
    this.createMenuDown();

    //observa que si al el perfil o los roles del usuario se refresque el menu dinamico
    this.usuarioService.getUpdateUserObservable().subscribe((data) => {
      this.usuario = data;
      this.createMenuTop();
      this.createMenuDown();
    });

    this.storeService.getStoreObservable().subscribe((data) => {
      this.store = data;
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
    this.appPages.push({ title:'Eventos', url:'',icon:'calendar'});
    this.appPages.push({ title:'Buscador de servicios',url:'/main/main/stores',icon:'search-circle'});
    this.appPages.push({ title:'Mascotas en adopcion',url:'',icon:'heart'});

  }

  createMenuDown(){
    this.labels = [];
    if(this.usuario.perfil === 'Propietario'){
      this.labels.push( { title: 'Subscribirse como empresa', url:'/main/main/user-subscription', icon:'create'});
    }
    if(this.usuario.perfil === 'Empresa'){
      this.labels.push( { title: 'Administrar Negocio', url:'/main/main/store-manage', icon:'storefront'});
      if(this.store && (this.store.servicios.includes('Veterinario') || this.store.servicios.includes('Clinico'))){
        this.labels.push( { title: 'Pacientes', url:'/main/main/store-manage', icon:'bandage'});
      }
    }
    this.labels.push({ title: 'Cerrar Sesión', url: '/main/main/logout', icon: 'log-out' });
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      console.log("respuesta",respuesta);
      this.respuesta = respuesta
    })
      .catch(err => {
        console.log("err",err);
        this.respuesta = err
      })
  }

}
