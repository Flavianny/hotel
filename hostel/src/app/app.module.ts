import { Routes, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {InputTextModule} from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HospedeCadastroComponent } from './hospede-cadastro/hospede-cadastro.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { QuartoCadastroComponent } from './quarto-cadastro/quarto-cadastro.component';
import {FileUploadModule} from 'primeng/fileupload';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { TooltipModule } from 'primeng/tooltip';
import {CardModule} from 'primeng/card';
import {HttpClientModule} from '@angular/common/http';
import { FuncionarioListagemComponent } from './funcionario-listagem/funcionario-listagem.component';
import { ReservaCadastroComponent } from './reserva-cadastro/reserva-cadastro.component';
import { HospedeListagemComponent } from './hospede-listagem/hospede-listagem.component';
import { QuartoListagemComponent } from './quarto-listagem/quarto-listagem.component';
import { ReservaListagemComponent } from './reserva-listagem/reserva-listagem.component';
import { RegistroCadastroComponent } from './registro-cadastro/registro-cadastro.component';
import { InicioComponent } from './inicio/InicioComponent';
import { RegistrosListagemComponent } from './registros-listagem/registros-listagem.component';
import { RegistroServicoComponent } from './registro-servico/registro-servico.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';
import { RegistroServicoListagemComponent } from './registro-servico-listagem/registro-servico-listagem.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { MapaAcomodacaoComponent } from './mapa-acomodacao/mapa-acomodacao.component';

const rotas: Routes = [
  { path: 'dados/pessoais', component: DadosPessoaisComponent },
  { path: 'funcionarios', component: FuncionarioListagemComponent },
  { path: 'hospedes', component: HospedeListagemComponent },
  { path: 'quartos', component: QuartoListagemComponent },
  { path: 'reservas', component: ReservaListagemComponent },
  { path: 'servicos', component: ServicoListagemComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'quartos/mapa-acomodacao', component: MapaAcomodacaoComponent },
  { path: 'servicos/solicita', component: RegistroServicoListagemComponent },
  { path: 'registros', component: RegistrosListagemComponent },
  { path: 'registros/novo', component: RegistroCadastroComponent },
  { path: 'servicos/novo', component: ServicoCadastroComponent },
  { path: 'servicos/solicita/novo', component: RegistroServicoComponent },
  { path: 'funcionarios/novo', component: FuncionarioCadastroComponent },
  { path: 'hospedes/novo', component: HospedeCadastroComponent },
  { path: 'quartos/novo', component: QuartoCadastroComponent },
  { path: 'reservas/novo', component: ReservaCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HospedeCadastroComponent,
    FuncionarioCadastroComponent,
    QuartoCadastroComponent,
    FuncionarioListagemComponent,
    ReservaCadastroComponent,
    HospedeListagemComponent,
    QuartoListagemComponent,
    ReservaListagemComponent,
    InicioComponent,
    RegistroCadastroComponent,
    RegistrosListagemComponent,
    RegistroServicoComponent,
    ServicoCadastroComponent,
    ServicoListagemComponent,
    RegistroServicoListagemComponent,
    DadosPessoaisComponent,
    MapaAcomodacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rotas),
    AngularFontAwesomeModule,
    InputTextModule,
    InputMaskModule,
    CardModule,
    OrganizationChartModule,
    ButtonModule,
    DropdownModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    GalleriaModule,
    TooltipModule,
    CalendarModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
