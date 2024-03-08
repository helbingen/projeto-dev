
export interface IRepresentante {
  /**
   * Nome do representante.
   */
  nome: string;
  /**
   * Número de identificação do representante.(CNPJ/CPF)
   */
  identificacao: string;
  /**
 * Número de identificação do cliente.
 */
  id_cliente: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRepresentanteModel extends Partial<IRepresentante> { }

export interface IRepresentanteModelCreate extends Partial<IRepresentanteModel> { }
