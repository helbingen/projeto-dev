import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';
import { IEnderecoInterface } from './models/IEnderecoInterface';
import { modalConfigLarge } from '../../../../shared/constants/modalConfigConstants';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss',
})
export class LocalizacaoComponent {

  constructor(public ngbModal: NgbModal, private toasterService: ToasterService) {
  }

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

  public abrirModalEndereco(): void {
    const modalRef = this.ngbModal.open(EnderecoModalComponent, modalConfigLarge);
    modalRef.componentInstance.tituloModal = 'Novo endereço';
    modalRef.componentInstance.labelBotao = 'Salvar';
    modalRef.componentInstance.confirmacaoSalvarEndereco.subscribe((response: boolean) => {
      response ? this.toasterService.showSuccess('Endereço adicionado com sucesso!') : this.toasterService.showDanger('Erro ao adicionar endereço')
    })
  }

}
