import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarPerfilComponent } from './modal-editar-perfil.component';
import { AvatarModule, ButtonModule, CheckboxModule, InputModule } from '@decisaosistemas/angular-ds';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalEditarPerfilComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    InputModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [ModalEditarPerfilComponent],
})
export class ModalEditarPerfilModule { }
