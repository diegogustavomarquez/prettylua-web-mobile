import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { StoreService } from 'src/app/services/store.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Store } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  servicios: string[] = [];

  filter = {
    nombre: '',
    localidad: '',
    codigo: '',
    servicio: ''
  }

  stores: Store[] = [];

  constructor(private storeService: StoreService,
    private uiServiceService: UiServiceService,
    private commonsService: CommonsService) { }

  ngOnInit() {
    this.servicios = this.commonsService.getRolesByEmpresa();
  }

  async busqueda() {
    if (!this.filter.servicio || this.filter.servicio == "") {
      this.uiServiceService.alertaInformativa("El campo servicio es obligatorio.");
      return;
    }
    await this.storeService.find(this.filter).then(p => {
      this.stores = p;
      if (!this.stores || this.stores.length == 0) {
        this.uiServiceService.alertaInformativa("No se encontraron servicios para su búsqueda.");
      }
    });
  }

}
