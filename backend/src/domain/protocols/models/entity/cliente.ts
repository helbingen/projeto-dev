
export interface ICliente {
  /**
   * Data de cadastro do cliente.
   */
  data_cadastro: Date;
  /**
   * Situação do cliente no sistema.
   */
  situacao: boolean;
  /**
   * CPF/CNPJ vinculado ao cliente.
   */
  identificacao: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IClienteModel extends Partial<ICliente> { }

export interface IClienteModelCreate extends Partial<IClienteModel> { }
