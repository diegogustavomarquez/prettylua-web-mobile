import { Component, OnInit, Input } from '@angular/core';
import {NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 
  @Input() email: string = '';

  constructor(  private navCtrl: NavController){}
  ngOnInit() {

  }
  
altaMascota(){
  this.navCtrl.navigateRoot( '/main/tabs/tab4', { animated: true } );
}
modificarMascota(){
  this.navCtrl.navigateRoot( '/main/tabs/tab4', { animated: true } );
}
}