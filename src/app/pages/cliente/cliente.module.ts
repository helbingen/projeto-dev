import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ButtonModule, DividerModule, InputModule, MascaraDiretiveModule } from '@decisaosistemas/angular-ds';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    AdicionarClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ButtonModule,
    InputModule,
    MascaraDiretiveModule
  ]
})
export class ClienteModule { }
