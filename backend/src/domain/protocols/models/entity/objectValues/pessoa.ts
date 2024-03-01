
export interface IPessoa {
  /**
   * Nome do cliente.
   */
  nome: string;
  /**
   * Número de identificação do cliente.(CNPJ/CPF)
   */
  identificacao: string;
  /**
   * Nome fantasia da empresa.
   */
  nome_fantasia: string;
  /**
   * Nome da mãe do cliente
   */
  nome_mae: string;
  /**
   * Inscrição municipal da empresa.
   */
  inscrição_municipal: string;
  /**
   * Inscrição estadual da empresa.
   */
  inscrição_estadual: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPessoaModel extends Partial<IPessoa> { }

export interface IPessoaModelCreate extends Partial<IPessoaModel> { }
