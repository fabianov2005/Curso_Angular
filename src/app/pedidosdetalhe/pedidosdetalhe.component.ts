import { Pedido } from './../shared/model/pedidos';
import { PedidoService } from './../shared/services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidosdetalhe',
  templateUrl: './pedidosdetalhe.component.html',
  styleUrls: ['./pedidosdetalhe.component.css']
})
export class PedidosdetalheComponent implements OnInit {

  constructor(private pedidoService: PedidoService,
              private route: ActivatedRoute,
              private router: Router) { }

  id: string;
  detalhapedido: Subscription;
  pedido: Pedido[];

  ngOnInit() {
    console.log ('invocado ngOnInit de pedidos detalhe');
    this.detalhapedido = this.route.params.subscribe(
                          params => {
                                    this.id = params['id'];
                                    console.log ('O id é: ' + this.id);
                                    this.pedido = this.pedidoService.localizaPedido(this.id);

                                    if (this.pedido === null) {
                                      this.router.navigate(['/naoEncontrado']);
                                    }
                          });
 }
}
