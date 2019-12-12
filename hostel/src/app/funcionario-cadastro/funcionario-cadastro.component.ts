import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {
  tipo =  [
    {label: 'Atendente', value: 'Atendente' },
    {label: 'Gerente', value: 'Gerente'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
