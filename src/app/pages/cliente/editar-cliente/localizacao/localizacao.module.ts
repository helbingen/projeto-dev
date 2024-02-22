import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizacaoComponent } from './localizacao.component';
import { AccordionModule, AvatarModule, BadgeModule, ButtonModule, CheckboxModule, InputModule, MascaraDiretiveModule, TooltipModule } from '@decisaosistemas/angular-ds';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { CardEnderecoComponent } from './card-endereco/card-endereco.component';
import { ModalDefaultModule } from '../../../../shared/modals/modal-default/modal-default.module';



@NgModule({
  declarations: [LocalizacaoComponent, EnderecoModalComponent, CardEnderecoComponent],
  imports: [
    CommonModule,
    AccordionModule,
    NgbModule,
    AvatarModule,
    InputModule,
    ButtonModule,
    CheckboxModule,
    MascaraDiretiveModule,
    BadgeModule,
    TooltipModule,
    ModalDefaultModule
  ],
})
export class LocalizacaoModule { }
