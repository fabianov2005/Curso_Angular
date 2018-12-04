import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() valor = 0;
  @Output() mudou = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    decrementa() {
    this.valor--;
    this.mudou.emit( { novoValor: this.valor } );
    }
    incrementa() {
    this.valor++;
    this.mudou.emit( { novoValor: this.valor } );
    }


}
