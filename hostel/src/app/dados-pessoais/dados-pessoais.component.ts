import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent {
    funcionarios = [
      {
        tipo: false, nome: 'Flávio Diniz', email: 'flvdiniz91@gmail.com',
        telefone: '83 99945-0664'
      }
    ];

}
