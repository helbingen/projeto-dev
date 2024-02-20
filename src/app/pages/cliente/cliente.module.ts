import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ButtonDropdownModule, ButtonModule, DividerModule, InputDateModule, InputModule, MascaraDiretiveModule } from '@decisaosistemas/angular-ds';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { MenuLateralDireitoModule } from '../../shared/components/menu-lateral-direito/menu-lateral-direito.module';
import { DadoscadastraisComponent } from './editar-cliente/dadoscadastrais/dadoscadastrais.component';


@NgModule({
  declarations: [
    ClienteComponent,
    AdicionarClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    DadoscadastraisComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ButtonModule,
    InputModule,
    MascaraDiretiveModule,
    MenuLateralDireitoModule,
    ButtonDropdownModule,
    InputDateModule,
  ]
})
export class ClienteModule { }
