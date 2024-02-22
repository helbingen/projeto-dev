import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';
import { IEnderecoInterface } from './models/IEnderecoInterface';
import { modalConfigLarge } from '../../../../shared/constants/modalConfigConstants';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import { FormControl, Validators } from '@angular/forms';
import { ValidatorsUtil } from '../../../../shared/utils/validatorsUtil';
import { ErrorsUtil } from '../../../../shared/utils/errorsUtil';
import { ITelefoneInterface } from './models/ITelefoneInterface';
import { IEmailInterface } from './models/IEmailInterface';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss',
})
export class LocalizacaoComponent {

  constructor(public ngbModal: NgbModal, private toasterService: ToasterService) {
  }

  public telefoneForm = new FormControl<string | null>(null, [Validators.required, ValidatorsUtil.telefoneValido]);
  public emailForm = new FormControl<string | null>(null, [Validators.required, Validators.email]);
  public errosCustomizados = ErrorsUtil.getErrors;
  public mascaraTelefone = TipoMascarasEnum.telefone;
  public mostrarInputTelefone = false;
  public mostrarInputEmail = false;
  public isEdicaoEmail = false;
  public isEdicaoTelefone = false;

  public listaEndereco: IEnderecoInterface[] = [
    {
      logradouro: 'Rua Xavier de AraújoRua Xavier de AraújoRua Xavier de AraújoRua Xavier de AraújoRua Xavier de AraújoRua Xavier de AraújoRua Xavier de AraújoRua Xavier de Araújo',
      complemento: 'Complemento testeComplemento testeComplemento testeComplemento testeComplemento testeComplemento testeComplemento testeComplemento testeComplemento testeComplemento testeComplemento teste',
      bairro: 'Guaxuma',
      cidade: 'Maceió',
      estado: 'AL',
      cep: '57038-720',
    },
    {
      logradouro: 'Rua das Violetas',
      complemento: 'Complemento teste 2',
      bairro: 'Altos da Glória',
      cidade: 'Cuiabá',
      estado: 'MT',
      cep: '78057-316',
    },
    {
      logradouro: 'Rua Pereira Barreto',
      complemento: 'Complemento teste 3',
      bairro: 'Setor Novo Horizonte',
      cidade: 'Itumbiara',
      estado: 'GO',
      cep: '75532-210',
    },
    {
      logradouro: 'Rua Pereira Barreto',
      complemento: 'Complemento teste 3',
      bairro: 'Setor Novo Horizonte',
      cidade: 'Itumbiara',
      estado: 'GO',
      cep: '75532-210',
    },
    {
      logradouro: 'Rua Pereira Barreto',
      complemento: 'Complemento teste 3',
      bairro: 'Setor Novo Horizonte',
      cidade: 'Itumbiara',
      estado: 'GO',
      cep: '75532-210',
    },
  ]

  public listaTelefone: ITelefoneInterface[] = [
    {
      telefone: '(62) 3333-3333',
      isPrincipal: true,
    },
    {
      telefone: '(62) 98745-4534',
      isPrincipal: false,
    },
  ]

  public listaEmail: IEmailInterface[] = [
    {
      email: 'daniel@decisaosistemas.com.br',
      isPrincipal: true,
    },
    {
      email: 'daniel@decisaosistemas.com.br',
      isPrincipal: false,
    },
  ]

  public abrirModalEndereco(): void {
    const modalRef = this.ngbModal.open(EnderecoModalComponent, modalConfigLarge);
    modalRef.componentInstance.tituloModal = 'Novo endereço';
    modalRef.componentInstance.labelBotao = 'Salvar';
    modalRef.componentInstance.confirmacaoSalvarEndereco.subscribe((response: boolean) => {
      response ? this.toasterService.showSuccess('Endereço adicionado com sucesso!') : this.toasterService.showDanger('Erro ao adicionar endereço')
    })
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

}
