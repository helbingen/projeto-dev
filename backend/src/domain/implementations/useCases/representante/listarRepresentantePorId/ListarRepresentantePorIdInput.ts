import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ListarRepresentantePorIdInput {

  public idCliente: string;
  public identificacao: string;

  constructor(pData: EntrypointData) {
    const idClienteValidador = ValidadorDados.iniciar(pData.parametros?.idCliente, 'parametros.idCliente').obrigatorio().string();
    const identificacaoValidador = ValidadorDados.iniciar(pData.parametros?.identificacao, 'parametros.identificacao').obrigatorio().string();
    if (idClienteValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "idCliente": ${idClienteValidador.getErro()}`);
    }
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    this.idCliente = pData.parametros.idCliente;
    this.identificacao = pData.parametros.identificacao;
  }
}