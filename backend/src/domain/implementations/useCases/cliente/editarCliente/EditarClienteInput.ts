import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class EditarClienteInput {

  public dataCadastro: Date;

  public situacao: boolean;

  public identificacao: string;

  constructor(pData: EntrypointData) {
    const dataCadastroValidador = ValidadorDados.iniciar(pData.body?.dataCadastro, 'body.dataCadastro').obrigatorio().date();
    const situacaoValidador = ValidadorDados.iniciar(pData.body?.situacao, 'body.situacao').obrigatorio().boolean();
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    if (dataCadastroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "dataCadastro": ${dataCadastroValidador.getErro()}`);
    }
    if (situacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "situacao": ${situacaoValidador.getErro()}`);
    }
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }

    this.dataCadastro = pData.body.dataCadastro;
    this.situacao = pData.body.situacao;
    this.identificacao = pData.body.identificacao;
  }
}