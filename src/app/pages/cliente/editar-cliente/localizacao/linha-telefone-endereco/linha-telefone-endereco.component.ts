import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from '../../../../../shared/modals/modal-default/modal-default.component';
import { modalConfigDefault } from '../../../../../shared/constants/modalConfigConstants';
import { ToasterService } from '../../../../../shared/components/toaster-controller/toaster.service';

@Component({
  selector: 'app-linha-telefone-endereco',
  templateUrl: './linha-telefone-endereco.component.html',
  styleUrl: './linha-telefone-endereco.component.scss'
})
export class LinhaTelefoneEnderecoComponent {

  @Input() telefoneEmail = '';
  @Input() isPrincipal = false;
  @Input() tipoDado!: 'Telefone' | 'E-mail';
  @Output() edicaoEvento: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private ngbModal: NgbModal, private toasterService: ToasterService) { }

  public editar(): void {
    this.edicaoEvento.emit(true);
  }

  public abrirModalExcluir(): void {
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    if (this.tipoDado === 'E-mail') {
      modalRef.componentInstance.textoHeader = 'Excluir e-mail?';
    } else {
      modalRef.componentInstance.textoHeader = 'Excluir telefone?';
    }
    modalRef.componentInstance.textoDescricao = `Você tem certeza que deseja excluir?
    Os registros excluídos não poderão ser restaurados.`;
    modalRef.componentInstance.labelBotao = 'Excluir';
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER';
    modalRef.componentInstance.confirmarAcao.subscribe((response: boolean) => {
      this.toasterService.showSuccess(`${this.tipoDado} excluído com sucesso!`)
    })
  }

}
