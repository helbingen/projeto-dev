import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';

export class CriarRepresentanteInput {

  public nome: string;

  public identificacao: string;

  public idCliente: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const nomeValidador = ValidadorDados.iniciar(pData.body?.nome, 'body.nome').obrigatorio().string();
    const idClienteValidador = ValidadorDados.iniciar(pData.body?.idCliente, 'body.idCliente').obrigatorio().string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    if (nomeValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "nome": ${nomeValidador.getErro()}`);
    }
    if (idClienteValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "idCliente": ${idClienteValidador.getErro()}`);
    }

    this.nome = pData.body.nome;
    this.identificacao = pData.body.identificacao;
    this.idCliente = pData.body.idCliente;
  }
}