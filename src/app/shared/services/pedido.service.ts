import { Pedido } from './../model/pedidos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[];

  constructor() {

    this.pedidos = [];

  }

  buscarPedidos() {
      return this.pedidos;
  }

  incluirPedidos(pedido: Pedido) {
    this.pedidos.push (pedido);
  }

  getTotalPedidos() {
    return this.pedidos
    .reduce((acc, cv) => acc + cv.total, 0);
  }
}
