import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../entity/errors/InformacaoNaoEncontrada';


export class CriarContaInput {

  public email: string;

  public nome: string;

  public senha: string;

  constructor(pData: EntrypointData) {
    const emailValidador = ValidadorDados.iniciar(pData.body?.email, 'body.email').obrigatorio().string();
    const nomeValidador = ValidadorDados.iniciar(pData.body?.nome, 'body.nome').obrigatorio().string();
    const senhaValidador = ValidadorDados.iniciar(pData.body?.senha, 'body.senha').obrigatorio().string();
    if (emailValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "email": ${emailValidador.getErro()}`);
    }
    if (nomeValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "nome": ${nomeValidador.getErro()}`);
    }
    if (senhaValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "senha": ${senhaValidador.getErro()}`);
    }

    this.email = pData.body.email;
    this.nome = pData.body.nome;
    this.senha = pData.body.senha;
  }
}