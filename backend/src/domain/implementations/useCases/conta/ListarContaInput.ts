import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../entity/errors/InformacaoNaoEncontrada';

export class ListarContaInput {

  public email: string;

  constructor(pData: EntrypointData) {
    const emailValidador = ValidadorDados.iniciar(pData.body?.email, 'body.email').obrigatorio().string();
    if (emailValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "email": ${emailValidador.getErro()}`);
    }

    this.email = pData.body.email;
  }
}