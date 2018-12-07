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
<<<<<<< HEAD
import { PedidosComponent } from './pedidos/pedidos.component';
import { TDPedidosComponent } from './tdpedidos/tdpedidos.component';
=======
import { EleicaoComponent } from './eleicao/eleicao.component';
>>>>>>> 86fc19e955b381b3f46993293e9073694de752de

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
    TDPedidosComponent
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
