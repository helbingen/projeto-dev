import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ListarContatoPorIdInput {

  public descricao: string;

  constructor(pData: EntrypointData) {
    const descricaoValidador = ValidadorDados.iniciar(pData.parametros?.descricao, 'parametros.descricao').obrigatorio().string();

    if (descricaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "descricao": ${descricaoValidador.getErro()}`);
    }
    this.descricao = pData.parametros.descricao;
  }
}