import { PRODUTOS } from './produtos';
import { AbstractControl, ValidationErrors } from '@angular/forms';


export const FORMAS = [
  { nome: 'Boleto (10%)', valor: 0.10 },
  { nome: 'Cartão (5%)', valor: 0.05 }
];

export class Pedido {
  constructor(public idxProduto?: number,
              public quantidade?: number,
              public idxForma?: number) {}

  get produto() {
    return PRODUTOS[this.idxProduto];
  }

  get forma() {
    return FORMAS[this.idxForma];
  }

  get total(): number {
    const valor = this.quantidade
      * this.produto.valor;
    return valor * (1 - this.forma.valor);
  }

}

