import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ListarRepresentanteInput {

  public idCliente: string;

  constructor(pData: EntrypointData) {
    const idClienteValidador = ValidadorDados.iniciar(pData.body?.idCliente, 'body.idCliente').obrigatorio().string();
    if (idClienteValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "idCliente": ${idClienteValidador.getErro()}`);
    }
    this.idCliente = pData.body.idCliente;
  }
}