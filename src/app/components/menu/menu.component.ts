import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  constructor(private DataService: DataService
              ) { }

  ngOnInit() {
    this.componentes = this.DataService.getMenuOpts();
                }

 

}
