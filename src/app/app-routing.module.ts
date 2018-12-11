import { ModuleWithProviders  } from '@angular/core';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosdetalheComponent } from './pedidosdetalhe/pedidosdetalhe.component';

const routes: Routes = [
  { path: '#', component: PedidosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'detalhar/:id', component: PedidosdetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
