
export interface ITipoContato {
  /** Identificação do tipo do contato. */
  idContato: string;
  /** Descrição do tipo do contato. (Telefone/Celular/Fixo) */
  descricaoContato: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITipoContatoModel extends Partial<ITipoContato> { }

export interface ITipoContatoModelCreate extends Partial<ITipoContatoModel> { }
