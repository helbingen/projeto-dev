import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class CriarClienteInput {

  public identificacao: string;
  public nome: string;
  public nomeFantasia?: string;
  public nomeMae?: string;

  constructor(pData: EntrypointData) {

    const validadores = [
      ValidadorDados.iniciar(pData.body.identificacao, 'body.identificacao').obrigatorio().string(),
      ValidadorDados.iniciar(pData.body.nome, 'body.nome').obrigatorio().string(),
      ValidadorDados.iniciar(pData.body.nomeFantasia, 'body.nomeFantasia').string(),
      ValidadorDados.iniciar(pData.body.nomeMae, 'body.nomeMae').string(),
    ];

    validadores.forEach((pValidador) => {
      if (pValidador.estaValido() === false) {
        throw new InformacaoNaoInfomada(pValidador.getErroCompleto());
      }
    });

    this.identificacao = pData.body.identificacao;
    this.nome = pData.body.nome;
    this.nomeFantasia = pData.body.nomeFantasia;
    this.nomeMae = pData.body.nomeMae;
  }
}