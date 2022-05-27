import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    
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
      img: '/assets/slides/publi11.png',
      titulo: '',
      desc: ''
    }
  ];

  slideOpts={
    loop:true,
    slidesPerView:1.3,
    freeMode:true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
      },
  };
  
  constructor() { }

  ngOnInit() {
  }

}
