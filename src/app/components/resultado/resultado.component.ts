import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi: number
  resultado: string
  interpretacion: string

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    this.resultado = ''
    this.interpretacion = ''

    this.getResultado()
  }

  getResultado() {
    if (this.bmi >= 25) {
      this.resultado = 'Sobrepeso'
      this.interpretacion = 'Tiene un peso corporl superior al normal, intente hacer más ejercicio.'
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Normal'
      this.interpretacion = 'Tiene un peso corporal normal. ¡Buen trabajo!'
    } else {
      this.resultado = 'Bajo peso'
      this.interpretacion = 'Tiene un peso corporl inferior al normal, considere enriquecer su dieta.'
    }
  }
}
