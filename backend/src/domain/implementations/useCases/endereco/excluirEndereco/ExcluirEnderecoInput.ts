import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ExcluirEnderecoInput {

  public cep: string;

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const cepValidador = ValidadorDados.iniciar(pData.body?.cep, 'body.cep').obrigatorio().string();
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();

    if (cepValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "cep": ${cepValidador.getErro()}`);
    }
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }

    this.cep = pData.body.cep;
    this.identificacao = pData.body.identificacao;
  }
}