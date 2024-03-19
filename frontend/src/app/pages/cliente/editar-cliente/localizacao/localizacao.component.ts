import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';
import { IEnderecoInterface, IEnderecoInterfaceOutput } from './models/IEnderecoInterface';
import { modalConfigLarge } from '../../../../shared/constants/modalConfigConstants';
import { CheckboxChangeEvent, TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import { FormControl, Validators } from '@angular/forms';
import { ValidatorsUtil } from '../../../../shared/utils/validatorsUtil';
import { ErrorsUtil } from '../../../../shared/utils/errorsUtil';
import { ITelefoneInterface } from './models/ITelefoneInterface';
import { IEmailInterface } from './models/IEmailInterface';
import { EnderecoService } from '../../../../shared/services/http/endereco.service';
import { ICriarEnderecoRequest } from '../../../../shared/services/models/endereco/ICriarEnderecoRequest';
import { Router } from '@angular/router';
import identificacaoParamUtil from '../../../../shared/utils/identificacaoParamUtil';
import { TelefoneService } from '../../../../shared/services/http/telefone.service';
import { IListarTelefonePorIdRequest } from '../../../../shared/services/models/telefone/IListarTelefonePorIdRequest';

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
  public isPrincipalChecked!: boolean;

  public listaEndereco: IEnderecoInterface[] = []

  public listaTelefone: ITelefoneInterface[] = []

  public listaEmail: IEmailInterface[] = []

  constructor(
    public ngbModal: NgbModal,
    private toasterService: ToasterService,
    private enderecoService: EnderecoService,
    private router: Router,
    private telefoneService: TelefoneService,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.isPrincipalChecked = false;
    await this.listarEndereco();
    await this.listarTelefones();
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

  public async adicionar(pInput: 'Telefone' | 'Email'): Promise<void> {
    if (pInput === 'Telefone') {
      try {
        await this.telefoneService.criarTelefone({
          numero: this.telefoneForm.value!,
          identificacao: this.identificacao,
          isPrincipal: this.isPrincipalChecked,
        });
        this.toasterService.showSuccess('Telefone adicionado com sucesso!');
        this.telefoneForm.reset();
        this.mudarEstadoInput(pInput);
        await this.listarTelefones();
      } catch (error) {
        this.toasterService.showAlert('Falha ao adicionar telefone!');
        console.log(error);
      }
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

  public async editarTelefone(pTelefoneEvento: IListarTelefonePorIdRequest): Promise<void> {
    this.isEdicaoTelefone = true;
    const dados = await this.telefoneService.listarTelefonePorId(pTelefoneEvento);
    this.telefoneForm.setValue(dados.dados.numero);
    this.isPrincipalChecked = dados.dados.is_principal;
  }

  public editarEmail(pIsEdicao: boolean): void {
    this.isEdicaoEmail = pIsEdicao;
  }

  public async salvarEdicao(pInput: 'Telefone' | 'Email'): Promise<void> {
    if (pInput === 'Telefone') {
      try {
        this.isEdicaoTelefone = !this.isEdicaoTelefone;
        await this.telefoneService.editarTelefone({
          identificacao: this.identificacao,
          isPrincipal: this.isPrincipalChecked,
          numero: this.telefoneForm.value!,
        })
        this.telefoneForm.reset();
        this.toasterService.showSuccess('Telefone editado com sucesso!');
      } catch (error) {
        this.toasterService.showAlert('Falha ao adicionar telefone');
        console.error(error);
      }
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

  public changeCheckboxIsPrincipal(pEventCheckbox: CheckboxChangeEvent): void {
    this.isPrincipalChecked = pEventCheckbox.isChecked;
  }

  public async listarTelefones(): Promise<void> {
    this.listaTelefone = (await this.telefoneService.listarTelefones(this.identificacao)).dados as ITelefoneInterface[];
  }

  public async excluirTelefoneEmail(pEventoConfirmacao: boolean): Promise<void> {
    if (pEventoConfirmacao) {
      await this.listarTelefones();
      this.telefoneForm.reset();
    }
  }

}
