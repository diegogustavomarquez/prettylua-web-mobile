import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slides: { img: string, titulo: string, desc: string,href:string }[] = [
       
    {
      img: '/assets/slides/promo1.png',
      titulo: '',
      desc: '',
      href:'https://prettyluamobile.web.app/main/main/stores/stores-view/62b50420ba8bee8572361e8d'
    },
    {
      img: '/assets/slides/promo2.png',
      titulo: '',
      desc: '',
      href:'https://prettyluamobile.web.app/main/main/stores/stores-view/62b500baba8bee8572361e71'
    },
    {
      img: '/assets/slides/promo3.png',
      titulo: '',
      desc: '',
      href:'https://prettyluamobile.web.app/main/main/stores/stores-view/62b50291ba8bee8572361e7e'
    },
    {
      img: '/assets/slides/promo4.png',
      titulo: '',
      desc: '',
      href:'https://prettyluamobile.web.app/main/main/stores/stores-view/62b4ff4aba8bee8572361e64'
    },
    {
      img: '/assets/slides/promo5.png',
      titulo: '',
      desc: '',
      href:'https://prettyluamobile.web.app/main/main/stores/stores-view/62b4fbb5ba8bee8572361e23'
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
