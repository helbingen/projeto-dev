import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../entity/errors/InformacaoNaoEncontrada';

export class EditarEmailInput {

  public email: string;

  public isPrincipal: boolean;

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const emailValidador = ValidadorDados.iniciar(pData.body?.email, 'body.email').obrigatorio().string();
    const isPrincipalValidador = ValidadorDados.iniciar(pData.body?.isPrincipal, 'body.isPrincipal').obrigatorio().boolean();
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    if (emailValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "email": ${emailValidador.getErro()}`);
    }
    if (isPrincipalValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "isPrincipal": ${isPrincipalValidador.getErro()}`);
    }
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }

    this.email = pData.body.email;
    this.isPrincipal = pData.body.isPrincipal;
    this.identificacao = pData.body.identificacao;
  }
}