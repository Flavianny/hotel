import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-servico-listagem',
  templateUrl: './registro-servico-listagem.component.html',
  styleUrls: ['./registro-servico-listagem.component.css']
})
export class RegistroServicoListagemComponent {
  servicos = [
    {
      hospede: '1 - Flávio dos Santos Diniz', descricao: 'Lavar roupas', status: 'Realizado', valor: '49,90'
    },
    {
      hospede: '1 - Flávio dos Santos Diniz', descricao: 'Limpar quarto', status: 'Pagamento', valor: '0,00'
    }
  ];

}
