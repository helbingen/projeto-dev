import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEnderecoInterface } from '../models/IEnderecoInterface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from '../modals/endereco-modal/endereco-modal.component';
import { modalConfigDefault, modalConfigLarge } from '../../../../../shared/constants/modalConfigConstants';
import { ToasterService } from '../../../../../shared/components/toaster-controller/toaster.service';
import { ModalDefaultComponent } from '../../../../../shared/modals/modal-default/modal-default.component';
import { EnderecoService } from '../../../../../shared/services/http/endereco.service';
import { IEditarEnderecoRequest } from '../../../../../shared/services/models/endereco/IEditarEnderecoRequest';

@Component({
  selector: 'app-card-endereco',
  templateUrl: './card-endereco.component.html',
  styleUrl: './card-endereco.component.scss'
})
export class CardEnderecoComponent {

  @Input() endereco!: IEnderecoInterface;
  @Output() confirmacaoEvent: EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    private ngbModal: NgbModal,
    private toasterService: ToasterService,
    private enderecoService: EnderecoService,
  ) {
  }


  public async abrirModalEditarEndereco(): Promise<void> {
    const modalRef = this.ngbModal.open(EnderecoModalComponent, modalConfigLarge);
    modalRef.componentInstance.tituloModal = 'Editar endereço';
    modalRef.componentInstance.labelBotao = 'Salvar alterações';
    modalRef.componentInstance.endereco = this.endereco;
    modalRef.componentInstance.confirmacaoSalvarEndereco.subscribe((response: boolean) => {
      modalRef.componentInstance.enderecoOutputEvent.subscribe(async (enderecoEvent: IEnderecoInterface) => {
        try {
          await this.enderecoService.editarEndereco(this.buildEditarEnderecoRequest(enderecoEvent));
          this.confirmacaoEvent.emit(true);
          this.toasterService.showSuccess('Endereço editado com sucesso!')
        } catch (error) {
          this.toasterService.showAlert('Falha ao editar endereço!');
          console.error(error);
        }
      })
    });
  }

  private buildEditarEnderecoRequest(pEndereco: IEnderecoInterface): IEditarEnderecoRequest {
    return {
      identificacao: this.endereco.identificacao!,
      cep: pEndereco.cep,
      logradouro: pEndereco.logradouro,
      complemento: pEndereco.complemento,
      numero: pEndereco.numero,
      bairro: pEndereco.bairro,
      cidade: pEndereco.cidade,
      estado: pEndereco.estado,
      isPrincipal: pEndereco.isPrincipal,
    }
  }

  public async abrirModalExcluirEndereco(pIdentificacao: string, pCep: string): Promise<void> {
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    modalRef.componentInstance.textoHeader = 'Excluir endereço?';
    modalRef.componentInstance.textoDescricao = `Você tem certeza que deseja excluir?
    Os registros excluídos não poderão ser restaurados.`;
    modalRef.componentInstance.labelBotao = 'Excluir';
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER';
    modalRef.componentInstance.confirmarAcao.subscribe(async (response: boolean) => {
      try {
        await this.enderecoService.excluirEndereco(pIdentificacao, pCep);
        this.toasterService.showSuccess('Endereço excluído com sucesso!');
        this.confirmacaoEvent.emit(true);
      } catch (error) {
        this.toasterService.showAlert('Falha ao excluir endereço!');
        console.error(error);
      }
    })
  }
}
