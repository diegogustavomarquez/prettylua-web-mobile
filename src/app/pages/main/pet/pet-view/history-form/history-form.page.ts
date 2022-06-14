import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MascotaService } from '../../../../../services/hc.service';
import { UiServiceService } from '../../../../../services/ui-service.service';
import { UsuarioService } from '../../../../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.page.html',
  styleUrls: ['./history-form.page.scss'],
})
export class HistoryFormPage implements OnInit {


  public mascotas: Mascota[] = [];

  constructor(private navCtrl: NavController,
    private mascotaService: MascotaService,
    private uiService: UiServiceService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet/pet-view', { animated: true });
  }
}
