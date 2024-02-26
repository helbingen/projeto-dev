import { SituacaoPessoaEnum } from './SituacaoPessoa.enum';

export interface IPessoaInterface {
  nome: string,
  cpfCnpj: string,
  situacao: SituacaoPessoaEnum | null,
  dataDoCadastro: Date | null;
}
