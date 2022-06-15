import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, Usuario } from 'src/app/interfaces/interfaces';
import { CommonsService } from 'src/app/services/commons.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.page.html',
  styleUrls: ['./store-form.page.scss'],
})
export class StoreFormPage implements OnInit {

  store: Store = {};
  usuario: Usuario = {};
  provincias : string[] = [];
  servicios :string[]=[];
  dias :string[]=[];


  constructor(private commonsService : CommonsService,
              private usuarioService: UsuarioService,
              private storeService: StoreService) { }

  ngOnInit() {
    this.provincias = this.commonsService.getProvincias();
    this.servicios = this.commonsService.getRolesByEmpresa();
    this.dias = this.commonsService.getDias();
    this.usuario = this.usuarioService.usuario;
    this.storeService.findByUserId(this.usuario._id).then(p => p ? this.store = p : p = {});
  }

  async crearStore(fStore: NgForm) {
  }

}
