import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto do Curso Angular - SERPRO';


  onMudou(dados: any) {
    alert(dados.novoValor);
  }

  onNumeroInvalido(dados: any) {
    alert('Valor inválido para conversão !!!');
  }
}
