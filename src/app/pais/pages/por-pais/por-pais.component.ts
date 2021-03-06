import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = ''
  hayError:boolean = false;
  paises : Country[] = [];
  constructor(private paisService:PaisService) { }

  buscar( termino: string){
    this.termino = termino
    this.hayError = false; 
    // console.log(this.termino);
    //Para que un observable se dispare, se debe tener un suscribe
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises, 
        console.log(paises);
      }, 
      error: (error) => {
        this.hayError = true, 
        this.paises = []},
    });
  }

  sugerencias(termino:string){
    this.hayError = false;
  }



}
