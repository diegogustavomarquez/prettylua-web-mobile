import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  respuesta: any;
  readonly VAPID_PUBLIC_KEY = "BDoY7Ap872g9qjnRrNQeQp58HMzw-6dQ9JyLWmozepSmGUPFeTNNwqe30SXQFLs1W1sEIE1klNWU9UppOdnvpVY";

  slides: { img: string, titulo: string, desc: string,href:string }[] = [
    
    
   
    {
      img: '/assets/slides/promo1.png',
      titulo: '',
      desc: '',
      href:'http://localhost:8100/main/main/stores/stores-view/62a822540f5c22b99ba95444'
    },
    {
      img: '/assets/slides/promo2.png',
      titulo: '',
      desc: '',
      href:'http://localhost:8100/main/main/stores/stores-view/62a822540f5c22b99ba95444'
    },
    {
      img: '/assets/slides/promo3.png',
      titulo: '',
      desc: '',
      href:'http://localhost:8100/main/main/stores/stores-view/62a822540f5c22b99ba95444'
    },
    {
      img: '/assets/slides/promo4.png',
      titulo: '',
      desc: '',
      href:'http://localhost:8100/main/main/stores/stores-view/62a822540f5c22b99ba95444'
    },
    {
      img: '/assets/slides/promo5.png',
      titulo: '',
      desc: '',
      href:'http://localhost:8100/main/main/stores/stores-view/62a822540f5c22b99ba95444'
    }
  ];

  
  slideOpts={
    loop:true,
    
    spaceBetween: 35,
    autoplay:true,
    speed: 400
  };
  
  constructor(private swPush: SwPush,
              private subscriptionService : SubscriptionService,
              private uiService: UiServiceService) { }

  ngOnInit() {
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      console.log("respuesta",respuesta);
      this.respuesta = respuesta
      this.subscriptionService.save(respuesta);
      this.uiService.alertaInformativa('Se subscribio correctamente.');
    })
      .catch(err => {
        console.log("err",err);
        this.respuesta = err
      })
  }

}
