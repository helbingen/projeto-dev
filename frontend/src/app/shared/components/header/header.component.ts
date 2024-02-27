import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from '../../modals/modal-default/modal-default.component';
import { modalConfigDefault, modalConfigSmall } from '../../constants/modalConfigConstants';
import { Router } from '@angular/router';
import { ModalEditarPerfilComponent } from '../../modals/modal-editar-perfil/modal-editar-perfil.component';
import { ToasterService } from '../toaster-controller/toaster.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

  constructor(private ngbModal: NgbModal, private router: Router, private toasterService: ToasterService) { }

  public abrirModalLogout(): void {
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    modalRef.componentInstance.textoHeader = 'Sair do sistema?';
    modalRef.componentInstance.textoDescricao = 'Você tem certeza que deseja sair do sistema?';
    modalRef.componentInstance.labelBotao = 'Sim, sair';
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'PRIMARY'
    modalRef.componentInstance.confirmarAcao.subscribe((response: boolean) => {
      this.router.navigate(['../login'])
    })
  }

  public abrirModalEditarPerfil(): void {
    const modalRef = this.ngbModal.open(ModalEditarPerfilComponent, modalConfigDefault);
    modalRef.componentInstance.eventoConfirmarAcao.subscribe((response: boolean) => {
      this.toasterService.showSuccess('Perfil editado com sucesso!')
    })
  }

}
