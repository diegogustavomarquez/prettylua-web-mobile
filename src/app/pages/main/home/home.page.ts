import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    
    
   
    {
      img: '/assets/slides/promo1.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/promo2.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/promo3.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/promo4.png',
      titulo: '',
      desc: ''
    },
    {
      img: '/assets/slides/promo5.png',
      titulo: '',
      desc: ''
    }
  ];

  
  slideOpts={
    loop:true,
    
    spaceBetween: 35,
    autoplay:true,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {
  }

}
