import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  temperaturaConvertida: number;
  valorEntrada: number;
  estilo: string = 'display: none;';
  @Output() numeroInvalido = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  validaNumero(numero: number) {

    if ( isNaN(numero)) {
        this.numeroInvalido.emit(numero);
        this.estilo = 'display: true;';
        return false;
    } else {
        this.estilo = 'display: none;';
        return true;
    }

  }

  converter(dados: any) {
        console.log('Valor dados:' + dados);
        if (this.validaNumero(dados)) {
          this.temperaturaConvertida = ((dados - 32) * (5 / 9)) ;
          console.log(this.temperaturaConvertida);
        }
  }
}
