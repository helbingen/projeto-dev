import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos.component';
import { ContatosRoutingModule } from './contato-routing.module';
import { ButtonModule, InputModule, TooltipModule } from '@decisaosistemas/angular-ds';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ContatosComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
    TooltipModule,
    NgbModule,
  ]
})
export class ContatosModule { }
