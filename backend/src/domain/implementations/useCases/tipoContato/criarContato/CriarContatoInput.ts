import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class CriarContatoInput {

  public descricaoContato: string;

  constructor(pData: EntrypointData) {
    const descricaoContatoValidador = ValidadorDados.iniciar(pData.body?.descricaoContato, 'body.descricaoContato').obrigatorio().string();

    if (descricaoContatoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "descricaoContato": ${descricaoContatoValidador.getErro()}`);
    }

    this.descricaoContato = pData.body.descricaoContato;
  }
}