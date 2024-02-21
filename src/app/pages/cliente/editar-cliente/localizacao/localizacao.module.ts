import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizacaoComponent } from './localizacao.component';
import { AccordionModule, AvatarModule, ButtonModule, CheckboxModule, InputModule, MascaraDiretiveModule } from '@decisaosistemas/angular-ds';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { CepService } from '../../../../shared/services/cep.service';



@NgModule({
  declarations: [LocalizacaoComponent, EnderecoModalComponent],
  imports: [
    CommonModule,
    AccordionModule,
    NgbModule,
    AvatarModule,
    InputModule,
    ButtonModule,
    CheckboxModule,
    MascaraDiretiveModule,
  ],
})
export class LocalizacaoModule { }
