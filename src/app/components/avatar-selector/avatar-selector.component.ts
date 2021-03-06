import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();
  @Input() avatarActual = 'pata.png';

  avatars = [
    {
      img: 'icon.png',
      seleccionado: true
    },
    {
      img: 'av01.png',
      seleccionado: false
    },
    {
      img: 'av02.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor() { }

  ngOnInit() {

    this.avatars.forEach( avatar => avatar.seleccionado = false );

    for ( const avatar of this.avatars ) {

      if ( avatar.img === this.avatarActual ) {
        avatar.seleccionado = true;
        break;
      }
    }

  }

  seleccionarAvatar( avatar ) {

    this.avatars.forEach( av => av.seleccionado = false  );
    avatar.seleccionado = true;

    this.avatarSel.emit( avatar.img );

  }


}
