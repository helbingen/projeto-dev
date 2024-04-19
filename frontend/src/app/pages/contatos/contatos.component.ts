import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from '../../shared/modals/modal-default/modal-default.component';
import { modalConfigDefault } from '../../shared/constants/modalConfigConstants';
import { ContatoService } from '../../shared/services/http/contato.service';
import { FormControl, Validators } from '@angular/forms';
import { ToasterService } from '../../shared/components/toaster-controller/toaster.service';
import { IContatoInterface } from './models/IContatoInterface';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {

  public isEdicao: boolean = false;
  public isCriacao: boolean = false;

  public descricaoContatoForm = new FormControl<string | null>('', Validators.required);
  public arrayContatos: IContatoInterface[] = [];
  public idContatoEdicao: string = '';

  constructor(
    private ngbModal: NgbModal,
    private contatoService: ContatoService,
    private toasterService: ToasterService,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.listarContatos();
  }

  public async listarContatos(): Promise<void> {
    this.arrayContatos = (await this.contatoService.listarContatos()).dados;
  }

  public async adicionarContato(): Promise<void> {
    try {
      await this.contatoService.criarContato({
        descricaoContato: this.descricaoContatoForm.value!
      });
      this.descricaoContatoForm.reset();
      this.toasterService.showSuccess('Contato criado com sucesso!');
      await this.listarContatos();
    } catch (error) {
      this.toasterService.showSuccess('Falha ao criar contado!');
      console.error(error);
    }
  }

  public editarContato(pContato: IContatoInterface): void {
    this.idContatoEdicao = pContato.idContato;
    this.descricaoContatoForm.setValue(pContato.descricaoContato);
  }

  public async excluirContato(pIdContato: string): Promise<void> {
    const modalRef = this.ngbModal.open(ModalDefaultComponent, modalConfigDefault);
    modalRef.componentInstance.textoHeader = 'Excluir Contato';
    modalRef.componentInstance.textoDescricao = 'Deseja excluir contato? Esta ação não poderá ser desfeita.';
    modalRef.componentInstance.labelBotao = 'Excluir';
    modalRef.componentInstance.tipoBotaoConfirmarAcao = 'DANGER';
    modalRef.componentInstance.confirmarAcao.subscribe(async (response: boolean) => {
      try {
        await this.contatoService.excluirContato(pIdContato);
        this.toasterService.showSuccess('Contato excluído com sucesso!');
        await this.listarContatos();
      } catch (error) {
        this.toasterService.showAlert('Falha ao excluir contato!');
        console.error(error);
      }
    })
  }

  public async salvarEdicaoContato(pContato: IContatoInterface): Promise<void> {
    try {
      await this.contatoService.editarContato({
        descricaoContato: this.descricaoContatoForm.value!,
        idContato: pContato.idContato,
      });
      this.toasterService.showSuccess('Contato editado com sucesso!');
      await this.listarContatos();
      this.idContatoEdicao = '';
    } catch (error) {
      this.toasterService.showAlert('Falha ao editar contato');
      console.error(error);
    }
  }
}
