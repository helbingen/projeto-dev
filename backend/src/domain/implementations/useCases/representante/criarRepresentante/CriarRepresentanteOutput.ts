import { Representante } from '../../../entity/objectValues/Representante';

export class CriarRepresentanteOutput {
  public nome: string;
  public identificacao: string;
  constructor(pRepresentante: Representante) {
    this.nome = pRepresentante.nome;
    this.identificacao = pRepresentante.identificacao;
  }
}