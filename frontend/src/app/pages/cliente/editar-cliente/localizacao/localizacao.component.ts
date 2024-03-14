import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';
import { IEnderecoInterface, IEnderecoInterfaceOutput } from './models/IEnderecoInterface';
import { modalConfigLarge } from '../../../../shared/constants/modalConfigConstants';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import { FormControl, Validators } from '@angular/forms';
import { ValidatorsUtil } from '../../../../shared/utils/validatorsUtil';
import { ErrorsUtil } from '../../../../shared/utils/errorsUtil';
import { ITelefoneInterface } from './models/ITelefoneInterface';
import { IEmailInterface } from './models/IEmailInterface';
import { EnderecoService } from '../../../../shared/services/http/endereco.service';
import { ICriarEnderecoRequest } from '../../../../shared/services/models/endereco/ICriarEnderecoRequest';
import { Router } from '@angular/router';
import identificacaoParamUtil from '../../../../shared/utils/identificacaoParamUtil';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss',
})
export class LocalizacaoComponent {

  public telefoneForm = new FormControl<string | null>(null, [Validators.required, ValidatorsUtil.telefoneValido]);
  public emailForm = new FormControl<string | null>(null, [Validators.required, Validators.email]);
  public errosCustomizados = ErrorsUtil.getErrors;
  public mascaraTelefone = TipoMascarasEnum.telefone;
  public mostrarInputTelefone = false;
  public mostrarInputEmail = false;
  public isEdicaoEmail = false;
  public isEdicaoTelefone = false;
  private identificacao = identificacaoParamUtil.obterIdentificacaoPelaRota(this.router.url);

  public listaEndereco: IEnderecoInterface[] = []

  public listaTelefone: ITelefoneInterface[] = []

  public listaEmail: IEmailInterface[] = []

  constructor(
    public ngbModal: NgbModal,
    private toasterService: ToasterService,
    private enderecoService: EnderecoService,
    private router: Router,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.listarEndereco();
  }

  public async abrirModalEndereco(): Promise<void> {
    const modalRef = this.ngbModal.open(EnderecoModalComponent, modalConfigLarge);
    modalRef.componentInstance.tituloModal = 'Novo endereço';
    modalRef.componentInstance.labelBotao = 'Salvar';
    modalRef.componentInstance.confirmacaoSalvarEndereco.subscribe((response: boolean) => {
      if (response) {
        modalRef.componentInstance.enderecoOutputEvent.subscribe(async (enderecoEvent: IEnderecoInterface) => {
          try {
            await this.enderecoService.criarEndereco(this.buildCriarEnderecoRequest(enderecoEvent))
            this.toasterService.showSuccess('Endereço adicionado com sucesso!')
            await this.listarEndereco();
          } catch (error) {
            this.toasterService.showAlert('Falha ao adicionar endereço!');
            console.error(error);
          }
        })
      }
    })
  }

  private buildCriarEnderecoRequest(pEndereco: IEnderecoInterface): ICriarEnderecoRequest {
    return {
      identificacao: this.identificacao,
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

  public adicionar(pInput: 'Telefone' | 'Email'): void {
    if (pInput === 'Telefone') {
      this.toasterService.showSuccess('Telefone adicionado com sucesso!');
      this.telefoneForm.reset();
      this.mudarEstadoInput(pInput);
    } else {
      this.toasterService.showSuccess('E-mail adicionado com sucesso!');
      this.emailForm.reset();
      this.mudarEstadoInput(pInput);
    }
  }

  public mudarEstadoInput(pInput: 'Telefone' | 'Email'): void {
    if (pInput === 'Telefone') {
      this.mostrarInputTelefone = !this.mostrarInputTelefone;
    } else {
      this.mostrarInputEmail = !this.mostrarInputEmail;
    }
  }

  public editarTelefone(pIsEdicao: boolean): void {
    this.isEdicaoTelefone = pIsEdicao;
  }

  public editarEmail(pIsEdicao: boolean): void {
    this.isEdicaoEmail = pIsEdicao;
  }

  public salvarEdicao(pInput: 'Telefone' | 'Email'): void {
    if (pInput === 'Telefone') {
      this.isEdicaoTelefone = !this.isEdicaoTelefone;
      this.telefoneForm.reset();
      this.toasterService.showSuccess('Telefone editado com sucesso!');
    } else {
      this.isEdicaoEmail = !this.isEdicaoEmail;
      this.emailForm.reset();
      this.toasterService.showSuccess('E-mail editado com sucesso!');
    }
  }

  public async listarEndereco(): Promise<void> {
    try {
      const dados = await this.enderecoService.listarEnderecos(this.identificacao);
      this.listaEndereco = this.buildEnderecoInterface(dados.dados);
    } catch (error) {
      this.toasterService.showAlert('Falha ao carregar endereço!');
      console.error(error);
    }
  }

  private buildEnderecoInterface(pEnderecoBackend: IEnderecoInterfaceOutput[]): IEnderecoInterface[] {
    let enderecoInterface: IEnderecoInterface;
    let enderecoArray: IEnderecoInterface[] = [];
    pEnderecoBackend.forEach(endereco => {
      enderecoInterface = {
        cep: endereco.cep,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        complemento: endereco.complemento,
        estado: endereco.estado,
        isPrincipal: endereco.is_principal,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        identificacao: endereco.identificacao,
      };
      enderecoArray.push(enderecoInterface)
    });
    return enderecoArray;
  }

  public async recarregarEndereco(pEvent: boolean): Promise<void> {
    if (pEvent) {
      await this.listarEndereco();
    }
  }

}
