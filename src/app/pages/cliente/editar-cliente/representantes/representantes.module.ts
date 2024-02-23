import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentantesComponent } from './representantes.component';
import { RouterModule } from '@angular/router';
import { ButtonModule, InputModule, MascaraDiretiveModule } from '@decisaosistemas/angular-ds';
import { NaoHaDadosModule } from '../../../../shared/components/nao-ha-dados/nao-ha-dados.module';
import { ListarRepresentanteComponent } from './listar-representante/listar-representante.component';
import { RepresentantesRoutingModule } from './representantes-routing.module';
import { DadosCadastraisRepresentanteComponent } from './dados-cadastrais-representante/dados-cadastrais-representante.component';



@NgModule({
  declarations: [
    RepresentantesComponent, ListarRepresentanteComponent, DadosCadastraisRepresentanteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    NaoHaDadosModule,
    RepresentantesRoutingModule,
    InputModule,
    MascaraDiretiveModule,
  ]
})
export class RepresentantesModule { }
