import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  termino: string = ''
  hayError:boolean = false;
  pais : Country | undefined ;


  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe( ({id}) => {
    //   console.log('params:',id);
    //   this.paisService.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais);
        
    //   })
      
    // } )

    // Reduccion del codigo anterior - SwitchMap

    this.activatedRoute.params
    .pipe(switchMap(({id})=>this.paisService.getPaisPorAlpha(id)))
    .subscribe(resp =>{
      console.log(resp);
    })
  }
}
