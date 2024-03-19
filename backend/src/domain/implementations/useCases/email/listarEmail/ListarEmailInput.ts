import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ListarEmailInput {

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.parametros?.identificacao, 'parametros.identificacao').obrigatorio().string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }

    this.identificacao = pData.parametros.identificacao;
  }
}