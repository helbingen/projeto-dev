import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../entity/errors/InformacaoNaoEncontrada';

export class EditarPessoaInput {

  public nome: string;

  public identificacao: string;

  public nomeFantasia?: string;

  public nomeMae?: string;

  public inscricaoMunicipal?: string;

  public inscricaoEstadual?: string;

  constructor(pData: EntrypointData) {
    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    const nomeValidador = ValidadorDados.iniciar(pData.body?.nome, 'body.nome').obrigatorio().string();
    const nomeFantasiaValidador = ValidadorDados.iniciar(pData.body?.nomeFantasia, 'body.nomeFantasia').string();
    const nomeMaeValidador = ValidadorDados.iniciar(pData.body?.nomeMae, 'body.nomeMae').string();
    const inscricaoEstadualValidador = ValidadorDados.iniciar(pData.body?.inscricaoEstadual, 'body.inscricaoEstadual').string();
    const inscricaoMunicipalValidador = ValidadorDados.iniciar(pData.body?.inscricaoMunicipal, 'body.inscricaoMunicipal').string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    if (nomeValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "nome": ${identificacaoValidador.getErro()}`);
    }
    if (nomeFantasiaValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "nomeFantasia": ${identificacaoValidador.getErro()}`);
    }
    if (nomeMaeValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "nomeMae": ${identificacaoValidador.getErro()}`);
    }
    if (inscricaoMunicipalValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "inscricaoMunicipal": ${identificacaoValidador.getErro()}`);
    }
    if (inscricaoEstadualValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "inscricaoEstadual": ${identificacaoValidador.getErro()}`);
    }

    this.nome = pData.body.nome;
    this.identificacao = pData.body.identificacao;
    this.nomeFantasia = pData.body.nomeFantasia;
    this.nomeMae = pData.body.nomeMae;
    this.inscricaoMunicipal = pData.body.inscricaoMunicipal;
    this.inscricaoEstadual = pData.body.inscricaoEstadual;
  }
}