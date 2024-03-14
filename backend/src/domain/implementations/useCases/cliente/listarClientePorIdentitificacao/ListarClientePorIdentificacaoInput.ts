import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class ListarClientePorIdentificacaoInput {

  public identificacao: string;

  constructor(pData: EntrypointData) {

    const validadores = [
      ValidadorDados.iniciar(pData.parametros.identificacao, 'parametros.identificacao').obrigatorio().string(),
    ];

    validadores.forEach((pValidador) => {
      if (pValidador.estaValido() === false) {
        throw new InformacaoNaoInfomada(pValidador.getErroCompleto());
      }
    });

    this.identificacao = pData.parametros.identificacao;
  }
}