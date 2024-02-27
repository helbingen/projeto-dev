import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { modalConfigDefault } from '../../constants/modalConfigConstants';
import { ModalDefaultComponent } from '../../modals/modal-default/modal-default.component';
import { IPessoaInterface } from '../../models/IPessoaInterface';
import { ToasterService } from '../toaster-controller/toaster.service';
import { SituacaoPessoaEnum } from '../../models/SituacaoPessoa.enum';
import { ColorTokens } from '@decisaosistemas/angular-ds';


@Component({
  selector: 'app-linha-pessoa',
  templateUrl: './linha-pessoa.component.html',
  styleUrl: './linha-pessoa.component.scss'
})
export class LinhaPessoaComponent {

  @Input() pessoa!: IPessoaInterface;

  constructor(public router: Router, private ngbModal: NgbModal, private toasterService: ToasterService) {
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

  public editarRepresentante(pRotaAtiva: string): void {
    if (pRotaAtiva === '/cliente/editar-cliente/representantes') {
      this.router.navigate([this.router.url, 'editar'])
    } else {
      this.router.navigate([`${this.router.url}/editar-cliente/`, 'dadoscadastrais'])
    }
  }

  public abrirModalExclusao(pRotaAtiva: string): void {
    let mensagemToaster = '';
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    if (pRotaAtiva === '/cliente/editar-cliente/representantes') {
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
    modalRef.componentInstance.confirmarAcao.subscribe((response: boolean) => {
      this.toasterService.showSuccess(mensagemToaster)
    })
  }

}
