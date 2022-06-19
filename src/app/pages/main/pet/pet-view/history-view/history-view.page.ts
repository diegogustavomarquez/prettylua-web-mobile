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
 
  contieneAdjuntos : boolean = false;

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
      this.contieneAdjuntos = this.historiaClinica.adjuntos.length > 0 ? true : false;
    
    }
  
  onCancel() {
    this.navCtrl.navigateRoot(`/main/main/pet/pet-view/${this.mascotas._id}`, { animated: true });
  }

  descargar() : string {
    return this.historiaClinica.adjuntos[0];
  }

  downloadPdf(base64String, fileName,mimeType) {
    const source = base64String;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.${mimeType}`
    link.click();
  }
  
  onClickDownloadPdf(){
    let index : number = 1;
    this.historiaClinica.adjuntos.forEach( file => {
      let mimeType = file.match(/[^:/]\w+(?=;|,)/)[0];
      this.downloadPdf(file,`${this.historiaClinica.codigo}${index}`,mimeType);
      ++index;
    });
  }

}
