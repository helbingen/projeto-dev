import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPessoaInterface } from '../../../shared/models/IPessoaInterface';
import { SituacaoPessoaEnum } from '../../../shared/models/SituacaoPessoa.enum';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.scss'
})
export class ListarClienteComponent {

  public listaCliente: IPessoaInterface[] = [
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '42.095.531/0001-55',
      situacao: SituacaoPessoaEnum.ativo,
      dataDoCadastro: new Date('02-26-2024'),
    },
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '42.095.531/0001-55',
      situacao: SituacaoPessoaEnum.inativo,
      dataDoCadastro: new Date('02-26-2024'),
    },
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '42.095.531/0001-55',
      situacao: SituacaoPessoaEnum.negativado,
      dataDoCadastro: new Date('02-26-2024'),
    },
  ]

  constructor(public router: Router) {
  }

  public adicionarCliente(): void {
    this.router.navigate([this.router.url, 'adicionar-cliente']);
  }

}
