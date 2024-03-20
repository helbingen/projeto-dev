import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class ExcluirContatoInput {

  public idContato: string;

  constructor(pData: EntrypointData) {
    const idContatoValidador = ValidadorDados.iniciar(pData.body?.idContato, 'body.idContato').obrigatorio().uuid();

    if (idContatoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "idContato": ${idContatoValidador.getErro()}`);
    }
    this.idContato = pData.body.idContato;
  }
}