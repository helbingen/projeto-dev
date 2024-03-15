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
import { IRepresentanteInterface } from '../../../pages/cliente/editar-cliente/representantes/listar-representante/models/IRepresentanteInterface';
import { RepresentanteService } from '../../services/http/representante.service';
import identificacaoParamUtil from '../../utils/identificacaoParamUtil';


@Component({
  selector: 'app-linha-pessoa',
  templateUrl: './linha-pessoa.component.html',
  styleUrl: './linha-pessoa.component.scss'
})
export class LinhaPessoaComponent {

  @Input() pessoa!: NClienteNamespace.IListarClienteInterface;
  @Input() representante!: IRepresentanteInterface;
  @Output() exclusaoEvent: EventEmitter<boolean> = new EventEmitter(false);
  public rotaAtual: string = '';
  public idCliente = '';

  constructor(
    public router: Router,
    private ngbModal: NgbModal,
    private toasterService: ToasterService,
    private clienteService: ClienteService,
    private representanteService: RepresentanteService,
  ) {
    this.rotaAtual = router.url;
    this.idCliente = identificacaoParamUtil.obterIdentificacaoPelaRota(this.rotaAtual);
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

  public editarDadoCadastral(pRotaAtiva: string, pIdCliente: string, pIdRepresentante?: string): void {
    if (pRotaAtiva === `/cliente/editar-cliente/${pIdCliente}/representantes`) {
      this.router.navigate([`${this.router.url}/${pIdRepresentante}/editar`])
    } else {
      this.router.navigate([`${this.router.url}/editar-cliente/${pIdCliente}`])
    }
  }

  public abrirModalExclusao(pRotaAtiva: string, pIdentificacao: string): void {
    let mensagemToaster = '';
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    modalRef.componentInstance.identificacao = pIdentificacao;
    if (pRotaAtiva === `/cliente/editar-cliente/${this.idCliente}/representantes`) {
      modalRef.componentInstance.textoHeader = 'Excluir representante?';
      mensagemToaster = 'Representante excluído com sucesso!';
      modalRef.componentInstance.confirmarAcao.subscribe(async (response: boolean) => {
        const dados = await this.representanteService.excluirRepresentante(this.idCliente, pIdentificacao);
        if (dados.sucesso) {
          this.toasterService.showSuccess(mensagemToaster);
          this.exclusaoEvent.emit(true);
        } else {
          this.toasterService.showAlert('Falha ao excluir representante!');
          this.exclusaoEvent.emit(false);
        }
      })
    } else {
      modalRef.componentInstance.textoHeader = 'Excluir cliente?'
      mensagemToaster = 'Cliente excluído com sucesso!'
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
    modalRef.componentInstance.textoDescricao = `Você tem certeza que deseja excluir?
    Os registros excluídos não poderão ser restaurados.`
    modalRef.componentInstance.labelBotao = 'Excluir'
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER'
  }

}
