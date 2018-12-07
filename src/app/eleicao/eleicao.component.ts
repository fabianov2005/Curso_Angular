import { Component, OnInit } from '@angular/core';
import { candidatos } from '../shared/model/candidatos';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.component.html',
  styleUrls: ['./eleicao.component.css']
})
export class EleicaoComponent implements OnInit {

  jaVotei: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  validaVoto(NumeroVoto: number){
    if(isNaN(NumeroVoto)){

    }
  }

  jaVotou(){

  }

  votar(){
    this.jaVotei = true;
  }

}
