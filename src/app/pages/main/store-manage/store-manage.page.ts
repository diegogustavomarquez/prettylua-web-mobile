import { Component, OnInit } from '@angular/core';
import { UserSubscription } from 'src/app/interfaces/interfaces';
import { UserSubscriptionService } from 'src/app/services/user-subscription.service';

@Component({
  selector: 'app-store-manage',
  templateUrl: './store-manage.page.html',
  styleUrls: ['./store-manage.page.scss'],
})
export class StoreManagePage implements OnInit {

  public userSubscription : UserSubscription = {};

  constructor(private userSubscriptionService: UserSubscriptionService) { }

  async ngOnInit() {
    await this.userSubscriptionService.getbyUserId().then(p => {
      this.userSubscription = p;
    }); 
  }

}
