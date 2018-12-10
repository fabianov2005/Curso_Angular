import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { TesteCursoComponent } from './teste-curso/teste-curso.component';
import { AppCursoComponent } from './app-curso/app-curso.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContadorComponent } from './contador/contador.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TDPedidosComponent } from './tdpedidos/tdpedidos.component';
import { EleicaoComponent } from './eleicao/eleicao.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    TesteCursoComponent,
    AppCursoComponent,
    CalculadoraComponent,
    ContadorComponent,
    DiretivasComponent,
    PedidosComponent,
    TDPedidosComponent,
    EleicaoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
