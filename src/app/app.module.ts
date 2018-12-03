import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { TesteCursoComponent } from './teste-curso/teste-curso.component';
import { AppCursoComponent } from './app-curso/app-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    TesteCursoComponent,
    AppCursoComponent
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
