import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros-listagem',
  templateUrl: './registros-listagem.component.html',
  styleUrls: ['./registros-listagem.component.css']
})
export class RegistrosListagemComponent {
  registros = [
    {
      hospede: 'Flávio dos Santos Diniz', data: '12/12/2019',
      hora: '18:00', tipo: 'ENTRADA', veiculo: 'SIM'
    }
  ];

}
