import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospede-listagem',
  templateUrl: './hospede-listagem.component.html',
  styleUrls: ['./hospede-listagem.component.css']
})
export class HospedeListagemComponent {
  hospedes = [
    {
      nome: 'Hostel', email: 'hostel@gmail.com',
      telefone: '99 99999-9999', CPF: '111.111.111-11', civil: 'CASADO'
    },
    {
      tipo: false, nome: 'Flávio Diniz', email: 'flvdiniz91@gmail.com',
      telefone: '83 99945-0664', CPF: '096.753.184-57', civil: 'SOLTEIRO'
    }
  ];
}
