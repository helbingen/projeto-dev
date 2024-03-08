import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ExcluirRepresentanteInput {

  public identificacao: string;

  public idCliente: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const idClienteValidador = ValidadorDados.iniciar(pData.body?.idCliente, 'body.idCliente').obrigatorio().string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    if (idClienteValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "idCliente": ${idClienteValidador.getErro()}`);
    }
    this.identificacao = pData.body.identificacao;
    this.idCliente = pData.body.idCliente;
  }
}