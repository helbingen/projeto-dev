import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPessoaInterface } from '../../../../../shared/models/IPessoaInterface';

@Component({
  selector: 'app-listar-representante',
  templateUrl: './listar-representante.component.html',
  styleUrl: './listar-representante.component.scss'
})
export class ListarRepresentanteComponent {

  constructor(private router: Router) { }


  public listaRepresentantes: IPessoaInterface[] = [
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '53.486.767/0001-39',
      dataDoCadastro: null,
      situacao: null
    },
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '53.486.767/0001-39',
      dataDoCadastro: null,
      situacao: null
    },
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '53.486.767/0001-39',
      dataDoCadastro: null,
      situacao: null
    },
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '53.486.767/0001-39',
      dataDoCadastro: null,
      situacao: null
    },
    {
      nome: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t`,
      cpfCnpj: '53.486.767/0001-39',
      dataDoCadastro: null,
      situacao: null
    },
  ]


  public adicionarRepresentante(): void {
    this.router.navigate([this.router.url, 'adicionar']);
  }

}
