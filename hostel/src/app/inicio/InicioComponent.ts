import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  funcionarios = [
    { nome: 'flavio' }
  ];

  images: any[];
  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/praia.jpg'});
    this.images.push({source: 'assets/galleria1.jpg'});
    this.images.push({source: 'assets/galleria2.jpg'});
    this.images.push({source: 'assets/galleria3.jpg'});
    this.images.push({source: 'assets/galleria4.jpg'});
    this.images.push({source: 'assets/galleria5.jpg'});
    this.images.push({source: 'assets/galleria6.jpg'});
    this.images.push({source: 'assets/galleria7.jpg'});
    this.images.push({source: 'assets/galleria8.jpg'});
    this.images.push({source: 'assets/galleria9.jpg'});
    this.images.push({source: 'assets/galleria10.jpg'});
    this.images.push({source: 'assets/galleria11.jpg'});
    this.images.push({source: 'assets/galleria12.jpg'});
}
}
