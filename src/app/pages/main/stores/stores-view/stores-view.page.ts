import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/interfaces/interfaces';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stores-view',
  templateUrl: './stores-view.page.html',
  styleUrls: ['./stores-view.page.scss'],
})
export class StoresViewPage implements OnInit {

  public id: string;
  store : Store = {};
  constructor(private storeService: StoreService,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    await this.storeService.findById(this.id).then(p => this.store = p);
  }

}
