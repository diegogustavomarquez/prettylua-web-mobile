import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.logout();
  }
  
  logout() {
  }

}
