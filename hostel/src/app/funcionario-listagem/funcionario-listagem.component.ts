import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-listagem',
  templateUrl: './funcionario-listagem.component.html',
  styleUrls: ['./funcionario-listagem.component.css']
})
export class FuncionarioListagemComponent {
  funcionarios = [
    {
      tipo: true, nome: 'Hostel', email: 'gmail.com',
      telefone: '99 99999-9999'
    },
    {
      tipo: false, nome: 'Flávio Diniz', email: 'flvdiniz91@gmail.com',
      telefone: '83 99945-0664'
    }
  ];

}
