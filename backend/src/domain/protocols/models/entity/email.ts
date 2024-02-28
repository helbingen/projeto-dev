
export interface IEmail {
  /**
   * E-mail do cliente.
   */
  email: string;
  /**
   * Indicador se o e-mail é principal.
   */
  is_principal: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IEmailModel extends Partial<IEmail> { }

export interface IEmailModelCreate extends Partial<IEmailModel> { }
