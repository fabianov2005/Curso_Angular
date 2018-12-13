import { Pedido } from './../model/pedidos';
import { Injectable } from '@angular/core';
import { PRODUTOS } from '../model/produtos';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[];

  constructor(private http: HttpClient) {

    this.pedidos = [];

  }

  buscarPedidos(): Observable<Pedido[]> {
    return this.http
    .get<Pedido[]>('http://localhost:3000/api/pedidos').pipe( map(pedidos => pedidos.map(e => Object.assign(new Pedido(), e))));
  }

  localizaPedido(numeropedido: string): Pedido[] {
      return this.pedidos[numeropedido];
  }

  excluir(indice: number) {
      // tslint:disable-next-line:no-unused-expression

      this.pedidos.splice(indice, 1);
  }

  incluirPedidos(pedido: Pedido) {
    this.pedidos.push (pedido);
  }

  getTotalPedidos() {
    return this.pedidos.reduce((acc, cv) => acc + cv.total, 0);
  }
}
