import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-curso',
  templateUrl: './app-curso.component.html',
  styleUrls: ['./app-curso.component.css']
})
export class AppCursoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nomeCurso') nome = '';

  constructor() { }

  ngOnInit() {
  }

}
