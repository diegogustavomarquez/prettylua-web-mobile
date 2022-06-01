import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LogoutComponent } from 'src/app/components/./logout/logout.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public appPages = [

    { title: 'Mi Cuenta', url: '/main/main/account', icon: 'person' },
    { title: 'Mis Mascotas', url: '/main/main/pet', icon: 'paw' },
    { title: 'Notificaciones',url:'', icon: 'notifications' },
    { title: 'Favoritos',url:'', icon: 'star' },

  ];

  public labels = [
   { title:'Eventos', url:'',icon:'calendar'},
   { title:'Mascotas en adopcion',url:'',icon:'heart'},
   { title: 'Cerrar Sesión', url: '/main/main/logout', icon: 'log-out' }
  ]
    ;

  usuario: Usuario;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }
  
}
