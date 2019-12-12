import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-listagem',
  templateUrl: './servico-listagem.component.html',
  styleUrls: ['./servico-listagem.component.css']
})
export class ServicoListagemComponent {

  servicos = [
    {
      descricao: 'Lavar roupas', status: 'Pago', valor: '49,90'
    },
    {
      descricao: 'Limpar quarto', status: 'Free', valor: '0,00'
    }
  ];

}
