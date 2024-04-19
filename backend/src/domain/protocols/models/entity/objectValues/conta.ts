
export interface IConta {

  idConta: string;

  /**
   * E-mail do usuário do sistema.
   */
  email: string;
  /**
   * Nome do usuário do sistema.
   */
  nome: string;
  /**
   * Senha do usuário do sistema.
   */
  senha: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IContaModel extends Partial<IConta> { }

export interface IContaModelCreate extends Partial<IContaModel> { }
