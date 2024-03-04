import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/entryPoints/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class EditarClienteInput {

  public identificacao: string;
  public situacao?: string;
  public dataCadastro?: Date;
  public nome: string;
  public nomeFantasia?: string;
  public nomeMae?: string;
  public inscricaoMunicipal?: string;
  public inscricaoEstadual?: string;

  constructor(pData: EntrypointData) {

    const validadores = [
      ValidadorDados.iniciar(pData.body.identificacao, 'body.identificacao').obrigatorio().string(),
      ValidadorDados.iniciar(pData.body.nome, 'body.nome').obrigatorio().string(),
      ValidadorDados.iniciar(pData.body.situacao, 'body.situacao').string(),
      ValidadorDados.iniciar(pData.body.dataCadastro, 'body.dataCadastro').date(),
      ValidadorDados.iniciar(pData.body.nomeFantasia, 'body.nomeFantasia').string(),
      ValidadorDados.iniciar(pData.body.nomeMae, 'body.nomeMae').string(),
      ValidadorDados.iniciar(pData.body.inscricaoMunicipal, 'body.inscricaoMunicipal').string(),
      ValidadorDados.iniciar(pData.body.inscricaoEstadual, 'body.inscricaoEstadual').string(),
    ];

    validadores.forEach((pValidador) => {
      if (pValidador.estaValido() === false) {
        throw new InformacaoNaoInfomada(pValidador.getErroCompleto());
      }
    });

    this.identificacao = pData.body.identificacao;
    this.situacao = pData.body.situacao;
    this.dataCadastro = pData.body.dataCadastro;
    this.nome = pData.body.nome;
    this.nomeFantasia = pData.body.nomeFantasia;
    this.nomeMae = pData.body.nomeMae;
    this.inscricaoMunicipal = pData.body.inscricaoMunicipal;
    this.inscricaoEstadual = pData.body.inscricaoEstadual;
  }
}