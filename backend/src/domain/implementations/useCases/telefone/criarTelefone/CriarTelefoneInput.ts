import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class CriarTelefoneInput {

  public numero: string;

  public isPrincipal: boolean;

  constructor(pData: EntrypointData) {
    const numeroValidador = ValidadorDados.iniciar(pData.body?.numero, 'body.numero').obrigatorio().string();
    const isPrincipalValidador = ValidadorDados.iniciar(pData.body?.isPrincipal, 'body.isPrincipal').obrigatorio().boolean();

    if (numeroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "numero": ${numeroValidador.getErro()}`);
    }
    if (isPrincipalValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "isPrincipal": ${numeroValidador.getErro()}`);
    }

    this.numero = pData.body.numero;
    this.isPrincipal = pData.body.isPrincipal;
  }
}