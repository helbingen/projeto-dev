import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ExcluirTelefoneInput {

  public identificacao: string;

  public numero: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const numeroValidador = ValidadorDados.iniciar(pData.body?.numero, 'body.numero').obrigatorio().string();

    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`)
    }
    if (numeroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "numero": ${numeroValidador.getErro()}`);
    }
    this.identificacao = pData.body.identificacao;
    this.numero = pData.body.numero;
  }
}