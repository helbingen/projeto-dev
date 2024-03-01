import { Representante } from '../../../entity/objectValues/Representante';

export class ListarRepresentanteOutput {
  public nome: string;
  public identificacao: string;
  constructor(pRepresentante: Representante) {
    this.nome = pRepresentante.nome;
    this.identificacao = pRepresentante.identificacao;
  }
}