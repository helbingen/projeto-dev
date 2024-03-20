import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class EditarContatoInput {

  public descricaoContato: string;

  public idContato: string;

  constructor(pData: EntrypointData) {
    const descricaoContatoValidador = ValidadorDados.iniciar(pData.body?.descricaoContato, 'body.descricaoContato').obrigatorio().string();
    const idContatoValidador = ValidadorDados.iniciar(pData.body?.idContato, 'body.idContato').obrigatorio().uuid();

    if (descricaoContatoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "descricaoContato": ${descricaoContatoValidador.getErro()}`);
    }
    if (idContatoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "idContato": ${idContatoValidador.getErro()}`);
    }

    this.descricaoContato = pData.body.descricaoContato;
    this.idContato = pData.body.idContato;
  }
}