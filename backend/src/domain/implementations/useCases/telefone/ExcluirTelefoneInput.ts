import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../entity/errors/InformacaoNaoEncontrada';

export class ListarTelefoneInput {

  public identificacao: string;

  public numero: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const numeroValidador = ValidadorDados.iniciar(pData.body?.numero, 'body.numero').obrigatorio().string();

    if (identificacaoValidador.estaInvalido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`)
    }
    if (numeroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "numero": ${numeroValidador.getErro()}`);
    }
    this.identificacao = pData.body.identificacao;
    this.numero = pData.body.numero;
  }
}