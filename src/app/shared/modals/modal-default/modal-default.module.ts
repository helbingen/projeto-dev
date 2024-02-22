import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDefaultComponent } from './modal-default.component';
import { ButtonModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    ModalDefaultComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
})
export class ModalDefaultModule { }
