import { ICliente, IClienteModel, IClienteModelCreate } from '../../../protocols/models/entity/objectValues/cliente';
import { SituacaoClienteEnum } from '../../contants/enum/situacaoClienteEnum';

export class Cliente implements ICliente {

  public situacao: string = SituacaoClienteEnum.ativo;
  public data_cadastro: Date = new Date();
  public identificacao: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: IClienteModel) {
    if (pValores === undefined) return;

    this.situacao = pValores.situacao ?? this.situacao;
    this.data_cadastro = pValores.data_cadastro ?? this.data_cadastro;
    this.identificacao = pValores.identificacao ?? this.identificacao;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;
  }

  public gerarObjCriar(): IClienteModelCreate {
    return {
      situacao: this.situacao,
      data_cadastro: this.data_cadastro,
      identificacao: this.identificacao,
    };
  }
  public gerarObjetoEditar(): IClienteModelCreate {
    return {
      situacao: this.situacao,
      data_cadastro: this.data_cadastro,
    };
  }
}
