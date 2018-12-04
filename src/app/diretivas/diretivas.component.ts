import { Component, OnInit } from '@angular/core';
import { Produtos } from '../shared/model/produtos';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  nomes = ['Fabiano', 'Augusto', 'Vasconcelos', 'Silva' ];
  produtos = Produtos;

  constructor() { }

  ngOnInit() {
  }

}
