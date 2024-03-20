
export interface ITelefone {
  /**
   * Número do telefone sem espaço e sem caracteres especiais.
   */
  numero: string;
  /**
   * Indicador se o endereço é principal.
   */
  is_principal: boolean;
  /**
 * Identificador de pessoa vinculada ao telefone.
 */
  identificacao: string;
  idContato: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITelefoneModel extends Partial<ITelefone> { }

export interface ITelefoneModelCreate extends Partial<ITelefoneModel> { }
