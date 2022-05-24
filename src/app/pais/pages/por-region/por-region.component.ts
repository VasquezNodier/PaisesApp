import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  region: string = ''
  hayError:boolean = false;
  paises : Country[] = [];
  regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';

  constructor(private paisService:PaisService) { }

  sugerencias(region:string){
    this.hayError = false;
  }

  activarRegion(region:string){

    if (region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
  }

  buscar( region: string){
    this.region = region
    this.hayError = false; 
    // console.log(this.region);
    //Para que un observable se dispare, se debe tener un suscribe
    this.paisService.buscarRegion(this.region).subscribe({
      next: (paises) => {
        this.paises = paises
        // console.log(paises);
      }, 
      error: (error) => {
        this.hayError = true, 
        this.paises = []},
    });
  }

}
