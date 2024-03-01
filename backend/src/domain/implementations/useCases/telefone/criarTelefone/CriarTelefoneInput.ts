import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class CriarTelefoneInput {

  public numero: string;

  public isPrincipal: string;

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const numeroValidador = ValidadorDados.iniciar(pData.body?.numero, 'body.numero').obrigatorio().string();
    const isPrincipalValidador = ValidadorDados.iniciar(pData.body?.isPrincipal, 'body.isPrincipal').obrigatorio().boolean();
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();

    if (identificacaoValidador.estaInvalido() === false) {
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