import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class EditarTelefoneInput {

  public numero: string;

  public isPrincipal: boolean;

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const numeroValidador = ValidadorDados.iniciar(pData.body?.numero, 'body.numero').obrigatorio().string();
    const isPrincipalValidador = ValidadorDados.iniciar(pData.body?.isPrincipal, 'body.isPrincipal').obrigatorio().boolean();
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();

    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`)
    }

    if (numeroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "numero": ${numeroValidador.getErro()}`);
    }
    if (isPrincipalValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "isPrincipal": ${numeroValidador.getErro()}`);
    }

    this.numero = pData.body.numero;
    this.isPrincipal = pData.body.isPrincipal;
    this.identificacao = pData.body.identificacao;
  }
}