import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { modalConfigDefault } from '../../constants/modalConfigConstants';
import { ModalDefaultComponent } from '../../modals/modal-default/modal-default.component';
import { ToasterService } from '../toaster-controller/toaster.service';
import { SituacaoPessoaEnum } from '../../models/SituacaoPessoa.enum';
import { ColorTokens } from '@decisaosistemas/angular-ds';
import { NClienteNamespace } from '../../models/ClienteNamespace';
import { ClienteService } from '../../services/http/cliente.service';


@Component({
  selector: 'app-linha-pessoa',
  templateUrl: './linha-pessoa.component.html',
  styleUrl: './linha-pessoa.component.scss'
})
export class LinhaPessoaComponent {

  @Input() pessoa!: NClienteNamespace.IListarClienteInterface;
  @Output() exclusaoEvent: EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    public router: Router,
    private ngbModal: NgbModal,
    private toasterService: ToasterService,
    private clienteService: ClienteService,
  ) {
  }

  public getTipoBadge(pSituacao: SituacaoPessoaEnum | null): ColorTokens {
    if (pSituacao === SituacaoPessoaEnum.ativo) {
      return 'CONFIRM';
    }
    if (pSituacao === SituacaoPessoaEnum.inativo) {
      return 'ALERT';
    }
    return 'DANGER'
  }

  public editarDadoCadastral(pRotaAtiva: string, pIdentificacao: string): void {
    if (pRotaAtiva === `/cliente/editar-cliente/${pIdentificacao}/representantes`) {
      this.router.navigate([this.router.url, `editar/${pIdentificacao}`])
    } else {
      this.router.navigate([`${this.router.url}/editar-cliente/${pIdentificacao}`])
    }
  }

  public abrirModalExclusao(pRotaAtiva: string, pIdentificacao: string): void {
    let mensagemToaster = '';
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    if (pRotaAtiva === `/cliente/editar-cliente/${pIdentificacao}/representantes`) {
      modalRef.componentInstance.textoHeader = 'Excluir representante?'
      mensagemToaster = 'Representante excluído com sucesso!'
    } else {
      modalRef.componentInstance.textoHeader = 'Excluir cliente?'
      mensagemToaster = 'Cliente excluído com sucesso!'
    }
    modalRef.componentInstance.textoDescricao = `Você tem certeza que deseja excluir?
    Os registros excluídos não poderão ser restaurados.`
    modalRef.componentInstance.labelBotao = 'Excluir'
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER'
    modalRef.componentInstance.identificacao = pIdentificacao;
    modalRef.componentInstance.confirmarAcao.subscribe(async (response: boolean) => {
      const dados = await this.clienteService.excluirCliente(pIdentificacao);
      if (dados.sucesso) {
        this.toasterService.showSuccess(mensagemToaster);
        this.exclusaoEvent.emit(true);
      } else {
        this.toasterService.showAlert('Falha ao excluir cliente!');
        this.exclusaoEvent.emit(false);
      }
    })
  }

}
