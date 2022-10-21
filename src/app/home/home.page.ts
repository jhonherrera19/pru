import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  atributo_de_la_clase : string = '';
  arreglo : any = ['ajaja ',123, false];
  arreglo_de_objeto = [
    {
      nombre: 'a',
      edad : 1
    },
    {
      nombre: 'b',
      edad: 2
    },
    {
      nombre: 'c',
      edad: 3
    },
    {
      nombre: 'd',
      edad: 4
    },
    {
      nombre: 'e',
      edad: 5
    },
    {
      nombre: 'f',
      edad: 6
    },


  ];
  arreglo_vacio =[];

  variable_interpolaridad: string;
  
  constructor() {
    this.atributo_de_la_clase = ' letra';
      this.mostrar_algo(this.arreglo_de_objeto);
   }
   mostrar_algo( arreglo: any[]){
    let variable_1: string ='hola';
    const variable_2: string = 'chao';

    arreglo.forEach(
      (arr,i)=> {
        console.log(arr.nombre, arr.edad, i);
        
      }
    );
  }
  agregarDatos( e ) {
    console.log( e );
  }  
    
  }


