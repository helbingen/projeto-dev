import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ListarEmailPorIdInput {

  public identificacao: string;

  public email: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const emailValidador = ValidadorDados.iniciar(pData.body?.email, 'body.email').obrigatorio().string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    if (emailValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "email": ${emailValidador.getErro()}`);
    }

    this.identificacao = pData.body.identificacao;
    this.email = pData.body.email;
  }
}