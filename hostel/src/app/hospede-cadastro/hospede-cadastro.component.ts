import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospede-cadastro',
  templateUrl: './hospede-cadastro.component.html',
  styleUrls: ['./hospede-cadastro.component.css']
})
export class HospedeCadastroComponent implements OnInit {
  estados =  [
    {label: 'Solteiro', value: 1 },
    {label: 'Casado', value: 2},
    {label: 'Viuvo', value: 3 },
    {label: 'Separado', value: 4},
    {label: 'Divorciado', value: 5}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
