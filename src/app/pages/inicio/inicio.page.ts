import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/interfaces';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 Componentes: Componente[] = [];


  constructor( private menuCtrl : MenuController) { }

  ngOnInit(): void {
    
  }
  
  toogleMenu(){
    this.menuCtrl.toggle();
  }
  

}
