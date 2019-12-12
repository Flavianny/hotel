import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-listagem',
  templateUrl: './reserva-listagem.component.html',
  styleUrls: ['./reserva-listagem.component.css']
})
export class ReservaListagemComponent {
  reservas = [
    {
      hospede: 'Flávio dos Santos Diniz', quartos: 105, valor: '359,70',
      dataEntrada: '09/12/2019',  dataSaida: '12/12/2019', qtdPessoas: 4
    }
  ];

}
