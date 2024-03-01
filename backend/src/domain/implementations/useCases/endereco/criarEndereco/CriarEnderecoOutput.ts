import { Endereco } from '../../../entity/objectValues/Endereco';

export class CriarEnderecoOutput {
  public cep: string;
  public logradouro: string;
  public numero: string;
  public complemento: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public is_principal: boolean;
  public identificacao: string;
  constructor(pEndereco: Endereco) {
    this.cep = pEndereco.cep;
    this.logradouro = pEndereco.logradouro;
    this.numero = pEndereco.numero;
    this.complemento = pEndereco.complemento;
    this.bairro = pEndereco.bairro;
    this.cidade = pEndereco.cidade;
    this.estado = pEndereco.estado;
    this.is_principal = pEndereco.is_principal;
    this.identificacao = pEndereco.identificacao;
  }
}