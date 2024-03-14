export interface IEditarClienteRequest {
  identificacao: string;
  nome: string;
  situacao: string;
  dataCadastro: Date | null;
  nomeFantasia: string | null;
  nomeMae: string | null;
  inscricaoMunicipal: string | null;
  inscricaoEstadual: string | null;
}
