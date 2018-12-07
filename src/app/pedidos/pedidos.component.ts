import { Component, OnInit } from '@angular/core';
// #asda
import { FORMAS, Pedido } from './../shared/model/pedidos';
import { PRODUTOS } from './../shared/model/produtos';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  form = new FormGroup({
                        produto: new FormControl(),
                        quantidade: new FormControl(null, Validators.required),
                        forma: new FormControl()
                      });

  pedidos: Pedido[];

  constructor() { }

  ngOnInit() {
    this.pedidos = [];
  }

  get produtos() {
    return PRODUTOS;
  }

  get formas() {
    return FORMAS;
  }

  incluir() {

    const pedido = new Pedido(this.form.value.produto, this.form.value.quantidade, this.form.value.forma);

    this.pedidos.push(pedido);
  }

  getTotal() {
    return this.pedidos
      .reduce((acc, cv) => acc + cv.total, 0);
  }
}

