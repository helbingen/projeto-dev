import { IEndereco, IEnderecoModel, IEnderecoModelCreate } from '../../../protocols/models/entity/objectValues/endereco';

interface IEnderecoModelUpdate {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  is_principal: boolean;
}

export class Endereco implements IEndereco {

  public cep: string = '';
  public logradouro: string = '';
  public numero: string = '';
  public complemento: string = '';
  public bairro: string = '';
  public cidade: string = '';
  public estado: string = '';
  public is_principal: boolean = false;
  public identificacao: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: IEnderecoModel) {
    if (pValores === undefined) return;

    this.cep = pValores.cep ?? this.cep;
    this.logradouro = pValores.logradouro ?? this.logradouro;
    this.numero = pValores.numero ?? this.numero;
    this.complemento = pValores.complemento ?? this.complemento;
    this.bairro = pValores.bairro ?? this.bairro;
    this.cidade = pValores.cidade ?? this.cidade;
    this.estado = pValores.estado ?? this.estado;
    this.is_principal = pValores.is_principal ?? this.is_principal;
    this.identificacao = pValores.identificacao ?? this.identificacao;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;
  }


  public gerarObjCriar(): IEnderecoModelCreate {
    return {
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      is_principal: this.is_principal,
      identificacao: this.identificacao,
    };
  }

  public gerarObjetoAtualizar(): IEnderecoModelUpdate {
    return {
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      is_principal: this.is_principal,
    }
  }
}
