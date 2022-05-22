import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = ''
  hayError:boolean = false;
  paises : Country[] = [];

  constructor(private capitalService:PaisService) { }

  sugerencias(termino:string){
    this.hayError = false;
  }

  buscar( termino: string){
    this.termino = termino
    this.hayError = false; 
    // console.log(this.termino);
    //Para que un observable se dispare, se debe tener un suscribe
    this.capitalService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises, 
        console.log(paises);
      }, 
      error: (error) => {
        this.hayError = true, 
        this.paises = []},
    });
  }

}
