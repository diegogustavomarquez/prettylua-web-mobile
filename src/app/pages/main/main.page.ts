import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public appPages = [
    { title: 'Principal', url: '/main/main/home', icon: 'home' },
    { title: 'Mascotas', url: '/main/main/pet', icon: 'paw' },
    { title: 'Mi Cuenta', url: '/main/main/account', icon: 'person' }
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  usuario: Usuario;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }
  

}
