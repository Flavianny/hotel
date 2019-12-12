import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto-listagem',
  templateUrl: './quarto-listagem.component.html',
  styleUrls: ['./quarto-listagem.component.css']
})
export class QuartoListagemComponent {
  quartos = [
    {
      disponivel: true, numero: 103, vista: true, valor: '89,90', frigobar: true,
      cama: 'SOLTEIRO, CASAL', equipamento: 'MICROONDAS, SECADOR, TV, COFRE', civil: 'CASADO', item: 'AGUA, CERVEJA, REFRIGERANTE'
    },
    {
      disponivel: true, numero: 104, vista: true, valor: '89,90', frigobar: true,
      cama: 'SOLTEIRO, CASAL', equipamento: 'MICROONDAS, SECADOR, TV, COFRE', civil: 'CASADO', item: 'AGUA, CERVEJA, REFRIGERANTE'
    },
    {
      disponivel: false, numero: 105, vista: true, valor: '119,90', frigobar: true,
      cama: 'SOLTEIRO, SOLTEIRO, CASAL', equipamento: 'MICROONDAS, SECADOR, TV, COFRE, CAFETEIRA', civil: 'SOLTEIRO', item: 'AGUA, CERVEJA'
    }
  ];

}
