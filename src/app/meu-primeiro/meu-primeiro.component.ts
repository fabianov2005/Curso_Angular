import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  temperaturaConvertida: number;

  constructor() { }

  ngOnInit() {
  }

  converter(temperatura) {
        console.log('passou aqui !') ;
        this.temperaturaConvertida = ((temperatura - 32) * (5 / 9)) ;
        console.log(this.temperaturaConvertida);

      }


}
