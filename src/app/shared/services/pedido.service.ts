import { Pedido } from './../model/pedidos';
import { Injectable } from '@angular/core';
import { PRODUTOS } from '../model/produtos';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
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
    .get<Pedido[]>('http://localhost:3000/api/pedidos').
    pipe( map(pedidos => pedidos.map(e => Object.assign(new Pedido(), e))));
  }

  localizaPedido(numeropedido: string): Observable<Pedido> {
      return this.http.get<Pedido>('http://localhost:3000/api/pedidos/' + numeropedido).
      pipe( map(e => Object.assign(new Pedido(), e)));
  }

  excluir(numeropedido: string): Observable<HttpResponse<string>> {
      // tslint:disable-next-line:no-unused-expression
      console.log('Número do Pedido:' + numeropedido);
      return this.http.delete('http://localhost:3000/api/pedidos/' + numeropedido, {observe: 'response', responseType: 'text'});
  }

  incluirPedidos(pedido: Pedido) {
    return this.http.post('http://localhost:3000/api/pedidos', pedido,
                           {observe: 'response', responseType: 'text'});
  }

  getTotalPedidos() {
    return this.pedidos.reduce((acc, cv) => acc + cv.total, 0);
  }
}
