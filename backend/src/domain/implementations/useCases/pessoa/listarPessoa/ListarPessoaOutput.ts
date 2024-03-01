import { Pessoa } from '../../../entity/objectValues/Pessoa';

export class EditarPessoaOutput {
  public nome: string;
  public nome_fantasia: string;
  public nome_mae: string;
  public inscrição_municipal: string;
  public inscrição_estadual: string;
  public identificacao: string;
  constructor(pPessoa: Pessoa) {
    this.nome = pPessoa.nome;
    this.nome_fantasia = pPessoa.nome_fantasia;
    this.nome_mae = pPessoa.nome_mae;
    this.inscrição_municipal = pPessoa.inscrição_municipal;
    this.inscrição_estadual = pPessoa.inscrição_estadual;
    this.identificacao = pPessoa.identificacao;
  }
}