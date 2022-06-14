import { Component, OnInit } from '@angular/core';
const STORE_LIST:{name:string;localidad:string;codigo:string;servicios:any}[]=
[
  { name: 'Arias', localidad : 'Paso de los libres', codigo : '3230', servicios:['Veterinaria','Peluqueria'] },
  { name: 'Internacional', localidad : 'CABA', codigo : '1089', servicios:['Petshop'] }
]
@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  
 
  constructor() { }
  stores = []
  filter= {
    nombre:'',
    localidad:'',
    codigo:'',
    servicio:''
  }
  busqueda(){
    this.stores=[]
   STORE_LIST.forEach(element => {
    //clausula de guarda
    let valid:boolean=true
    if(this.filter.codigo!==""){
      if(element.codigo!==this.filter.codigo   ){
        valid=false;
      }
    }
    if(this.filter.localidad!==""){
      if(element.localidad!==this.filter.localidad   ){
        valid=false;
      }
    }
    
    if(this.filter.nombre!==""){
      if(element.name!==this.filter.nombre  ){
        valid=false;
      }
    }

    if(this.filter.servicio!==""){
      if(element.servicios.indexOf(this.filter.servicio)==-1 ){
        valid=false;
      }
    }
    
    if(valid){
      this.stores.push(element)

    }
   

   });
      
    }
  ngOnInit() {
  }

}
