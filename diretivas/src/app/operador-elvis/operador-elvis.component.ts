import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa:any  = {
    desc :'Descrição da tarefa',
    responsavel: null,
    responsavel3: {nome:''},
    responsavel2: {
    usuario: null
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
