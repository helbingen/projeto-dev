
import { SituacaoPessoaEnum } from './SituacaoPessoa.enum';

export namespace NClienteNamespace {

  export interface IPessoaInterface {
    nome: string;
    nome_fantasia: string;
    nome_mae: string;
    inscrição_municipal: string;
    inscrição_estadual: string;
    identificacao: string;
  }

  export interface IClienteInterface {
    data_cadastro: string,
    identificacao: string,
    situacao: SituacaoPessoaEnum
  }

  export interface IListarClienteInterface {
    cliente: IClienteInterface
    pessoa: IPessoaInterface,
  }
}

