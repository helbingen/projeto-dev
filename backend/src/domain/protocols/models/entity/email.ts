
export interface IEmail {
  /**
   * E-mail do cliente.
   */
  email: string;
  /**
   * Indicador se o e-mail é principal.
   */
  is_principal: boolean;
  /**
 * Identificação de pessoa vinculada ao email.
 */
  identificacao: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IEmailModel extends Partial<IEmail> { }

export interface IEmailModelCreate extends Partial<IEmailModel> { }
