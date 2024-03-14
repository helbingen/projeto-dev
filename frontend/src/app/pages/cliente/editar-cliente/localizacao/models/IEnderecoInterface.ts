export interface IEnderecoInterface {
  logradouro: string,
  complemento: string | null,
  numero: string,
  bairro: string,
  cidade: string,
  estado: string,
  cep: string,
  isPrincipal: boolean;
  identificacao?: string;
}

export interface IEnderecoInterfaceOutput {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  is_principal: boolean;
  identificacao: string;
}
