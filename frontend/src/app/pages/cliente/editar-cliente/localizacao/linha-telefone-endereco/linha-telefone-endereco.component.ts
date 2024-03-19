import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from '../../../../../shared/modals/modal-default/modal-default.component';
import { modalConfigDefault } from '../../../../../shared/constants/modalConfigConstants';
import { ToasterService } from '../../../../../shared/components/toaster-controller/toaster.service';
import identificacaoParamUtil from '../../../../../shared/utils/identificacaoParamUtil';
import { Router } from '@angular/router';
import { TelefoneService } from '../../../../../shared/services/http/telefone.service';
import { IListarTelefonePorIdRequest } from '../../../../../shared/services/models/telefone/IListarTelefonePorIdRequest';

@Component({
  selector: 'app-linha-telefone-endereco',
  templateUrl: './linha-telefone-endereco.component.html',
  styleUrl: './linha-telefone-endereco.component.scss'
})
export class LinhaTelefoneEnderecoComponent {

  @Input() telefoneEmail = '';
  @Input() isPrincipal = false;
  @Input() tipoDado!: 'Telefone' | 'E-mail';
  @Output() exclusaoEvento: EventEmitter<boolean> = new EventEmitter(false);
  @Output() dadosTelefoneEvento: EventEmitter<IListarTelefonePorIdRequest> = new EventEmitter();
  private identificacaoPessoa = identificacaoParamUtil.obterIdentificacaoPelaRota(this.router.url)

  constructor(
    private ngbModal: NgbModal,
    private toasterService: ToasterService,
    private router: Router,
    private telefoneService: TelefoneService,
  ) { }

  public ngOnInit(): void {
  }

  public editar(): void {
    this.dadosTelefoneEvento.emit({
      identificacao: this.identificacaoPessoa,
      numero: this.telefoneEmail,
    })
  }

  public async abrirModalExcluir(): Promise<void> {
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    modalRef.componentInstance.textoDescricao = `Você tem certeza que deseja excluir?
    Os registros excluídos não poderão ser restaurados.`;
    modalRef.componentInstance.labelBotao = 'Excluir';
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER';
    if (this.tipoDado === 'E-mail') {
      modalRef.componentInstance.textoHeader = 'Excluir e-mail?';
    } else {
      modalRef.componentInstance.textoHeader = 'Excluir telefone?';
      modalRef.componentInstance.confirmarAcao.subscribe(async (response: boolean) => {
        try {
          await this.telefoneService.excluirTelefone(this.identificacaoPessoa, this.telefoneEmail);
          this.toasterService.showSuccess(`${this.tipoDado} excluído com sucesso!`);
          this.exclusaoEvento.emit(true);
        } catch (error) {
          this.toasterService.showAlert(`Falha ao excluir ${this.tipoDado}!`);
          console.error(error);
        }
      })
    }
  }

}
