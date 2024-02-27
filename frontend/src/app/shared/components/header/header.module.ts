import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AvatarModule } from '@decisaosistemas/angular-ds';
import { NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarPerfilModule } from '../../modals/modal-editar-perfil/modal-editar-perfil.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    NgbPopoverModule,
    ModalEditarPerfilModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
