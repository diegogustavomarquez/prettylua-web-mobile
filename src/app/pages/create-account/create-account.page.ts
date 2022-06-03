import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  imagen: any = '/assets/avatars/icon.png';

  isPhotoPresent: boolean = false;

  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    avatar: null,
    perfil: 'Propietario'
  };

  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService) { }

  ngOnInit() {
  }

  async registro(fRegistro: NgForm) {

    if (fRegistro.invalid) { return; }

    if (!this.isPhotoPresent) { this.registerUser.avatar = ''; }
    console.log(this.registerUser);
    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido) {
      // navegar al tabs
      this.navCtrl.navigateRoot('/main/main/home', { animated: true });
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }

  }

  /**
   * carga la imagen elegida por el usuario
   * 
   * @param event 
   */
  async loadImagen(event: any) {
    let archivos = event.target.files[0];
    let sizeFile: number = archivos.size;
    if (sizeFile > 100000) {
      this.uiService.alertaInformativa('Por favor. Guardar una foto con menos a 100kb.');
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(archivos);
    reader.onloadend = () => {
      this.registerUser.avatar = reader.result as string;
      this.isPhotoPresent = true;
    }
  }

  /**
   * Saca la foto seleccionada
   * 
   * @param event 
   */
  async kickImagen() {
    this.registerUser.avatar = this.imagen;
    this.isPhotoPresent = false;
  }

}

