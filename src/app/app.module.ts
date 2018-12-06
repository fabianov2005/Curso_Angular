import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { TesteCursoComponent } from './teste-curso/teste-curso.component';
import { AppCursoComponent } from './app-curso/app-curso.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContadorComponent } from './contador/contador.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { EleicaoComponent } from './eleicao/eleicao.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    TesteCursoComponent,
    AppCursoComponent,
    CalculadoraComponent,
    ContadorComponent,
    DiretivasComponent,
    EleicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
