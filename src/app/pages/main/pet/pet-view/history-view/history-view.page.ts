import { Component, OnInit } from '@angular/core';
import { HistoriaClinica, Mascota } from '../../../../../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../../../services/ui-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonsService } from '../../../../../services/commons.service';
import { HcService } from '../../../../../services/hc.service';
import { MascotaService } from '../../../../../services/mascota.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.page.html',
  styleUrls: ['./history-view.page.scss'],
})
export class HistoryViewPage implements OnInit {
  mascotas: Mascota = {};

  tipos :string[]=[];
  isNew: boolean = false;
 // imagen: any = '/assets/avatars/icon.png';
  isPhotoPresent: boolean = false;
  public id: string;
  historiaClinica : HistoriaClinica = {
    codigo:'', //Lo agrega BA
    petId:'',
    tipos:[],
    descripcion:'',
    adjuntos:null,
    comentarios:'',
    fecha:null,//lo agrega ell BA
    _id:'',
  };
 
  constructor(private navCtrl: NavController,
    private uiService: UiServiceService,
    private activatedRoute: ActivatedRoute,
    private commonsService: CommonsService,
    private hcService: HcService,
    private mascotaService: MascotaService) { }

  async ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.historiaClinica = await this.hcService.getbyId(this.id);
      this.mascotas = await this.mascotaService.getbyId(this.historiaClinica.petId);
    }
  
  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
  }

}
