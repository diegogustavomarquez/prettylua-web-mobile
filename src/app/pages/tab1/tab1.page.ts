import { Component } from '@angular/core';
import {NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/publi4.jpg',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/slide-publicidad1.jpg',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/publi11.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/publi20.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/publi33.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/publi5.png',
      titulo: '',
      desc: ''
    }
  ];

  slideOpts={
    slidesPerView:1.3,
    freeMode:true
  };
  constructor() {}

}