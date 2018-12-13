import { PedidoService } from './../shared/services/pedido.service';
import { Component, OnInit } from '@angular/core';
// #asda
import { FORMAS, Pedido } from './../shared/model/pedidos';
import { PRODUTOS } from './../shared/model/produtos';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  form = new FormGroup({});
  // form = new FormGroup({
  //                       produto: new FormControl(),
  //                       quantidade: new FormControl(null, Validators.required),
  //                       forma: new FormControl()
  //                     });

  pedidos: Pedido[] ;

  constructor(private formBuilder: FormBuilder,
              private pedidoService: PedidoService,
              private route: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({produto: null,
                                        quantidade: [null, this.validarCodigo(15)],
                                        forma: null });

    this.pedidoService.buscarPedidos().subscribe(value => {
      this.pedidos = value;
      },
      error => {
      alert('Erro do servidor durante a consulta de cursos!');
      });

  }

  reset() {
    this.form.reset();
  }

  get produtos() {
    return PRODUTOS;
  }

  get formas() {
    return FORMAS;
  }

  buscarpedidos() {
    return this.pedidos;
  }

  excluir(indice: number) {
    return this.pedidoService.excluir(indice);
  }

  incluir() {
    const pedido = new Pedido(this.form.value.produto, this.form.value.quantidade, this.form.value.forma);
    this.pedidoService.incluirPedidos(pedido);
  }

  detalhar(numeropedido: number) {
    this.route.navigate(['/detalhar/' + numeropedido]);
  }

  getTotal() {
    return this.pedidoService.getTotalPedidos();
  }


  // validarCodigo(c: AbstractControl): ValidationErrors|null {
  //   return (+c.value < 10 ) ?  null :  { vlInvalido: true };

  // }

  validarCodigo(max: number) {
    return (c: AbstractControl): ValidationErrors|null => {
                                                           return ((+c.value <= max) && (+c.value != 0))  ? null : { vlInvalido : true };
                                                          };
  }

}

