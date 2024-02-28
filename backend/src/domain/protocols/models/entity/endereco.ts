
export interface IEndereco {
  /**
   * Cep do endereço.
   */
  cep: string;
  /**
   * Rua do endereço.
   */
  logradouro: string;
  /**
   * Número do imovel.
   */
  numero: string;
  /**
   * Complemento do endereço.
   */
  complemento: string;
  /**
   * Bairro da cidade onde o endereço está localizado.
   */
  bairro: string;
  /**
   * Cidade onde o endereço está localizado.
   */
  cidade: string;
  /**
   * Estado da cidade.
   */
  estado: string;
  /**
   * Indicador se o endereço é principal.
   */
  is_principal: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IEnderecoModel extends Partial<IEndereco> { }

export interface IEnderecoModelCreate extends Partial<IEnderecoModel> { }
