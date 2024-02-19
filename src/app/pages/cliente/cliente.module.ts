import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ButtonModule } from '@decisaosistemas/angular-ds';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    AdicionarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ButtonModule,
  ]
})
export class ClienteModule { }
