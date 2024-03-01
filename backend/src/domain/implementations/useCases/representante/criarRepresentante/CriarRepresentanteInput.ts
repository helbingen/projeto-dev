import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class CriarRepresentanteInput {

  public nome: string;

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const nomeValidador = ValidadorDados.iniciar(pData.body?.nome, 'body.nome').obrigatorio().string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    if (nomeValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "nome": ${nomeValidador.getErro()}`);
    }

    this.nome = pData.body.nome;
    this.identificacao = pData.body.identificacao;
  }
}