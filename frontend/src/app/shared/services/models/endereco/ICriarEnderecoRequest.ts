export interface ICriarEnderecoRequest {

  identificacao: string,
  cep: string,
  logradouro: string,
  numero: string,
  complemento: string | null;
  bairro: string;
  cidade: string;
  estado: string;
  isPrincipal: boolean;
}
