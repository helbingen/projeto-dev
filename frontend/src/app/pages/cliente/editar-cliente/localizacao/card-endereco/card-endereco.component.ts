import { Component, Input } from '@angular/core';
import { IEnderecoInterface } from '../models/IEnderecoInterface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from '../modals/endereco-modal/endereco-modal.component';
import { modalConfigDefault, modalConfigLarge } from '../../../../../shared/constants/modalConfigConstants';
import { ToasterService } from '../../../../../shared/components/toaster-controller/toaster.service';
import { ModalDefaultComponent } from '../../../../../shared/modals/modal-default/modal-default.component';

@Component({
  selector: 'app-card-endereco',
  templateUrl: './card-endereco.component.html',
  styleUrl: './card-endereco.component.scss'
})
export class CardEnderecoComponent {

  @Input() endereco!: IEnderecoInterface;

  constructor(private ngbModal: NgbModal, private toasterService: ToasterService) { }


  public abrirModalEditarEndereco(): void {
    const modalRef = this.ngbModal.open(EnderecoModalComponent, modalConfigLarge);
    modalRef.componentInstance.tituloModal = 'Editar endereço';
    modalRef.componentInstance.labelBotao = 'Salvar alterações';
    modalRef.componentInstance.endereco = this.endereco;
    modalRef.componentInstance.confirmacaoSalvarEndereco.subscribe((response: boolean) => {
      this.toasterService.showSuccess('Endereço editado com sucesso!');
    })
  }

  public abrirModalExcluirEndereco(): void {
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    modalRef.componentInstance.textoHeader = 'Excluir endereço?';
    modalRef.componentInstance.textoDescricao = `Você tem certeza que deseja excluir?
    Os registros excluídos não poderão ser restaurados.`;
    modalRef.componentInstance.labelBotao = 'Excluir';
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER';
    modalRef.componentInstance.confirmarAcao.subscribe((response: boolean) => {
      this.toasterService.showSuccess('Endereço excluído com sucesso!');
    })
  }
}
