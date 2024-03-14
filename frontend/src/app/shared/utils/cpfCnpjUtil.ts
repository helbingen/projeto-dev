import { LISTA_CNPJ_INVALIDOS, LISTA_CPF_INVALIDOS } from '../constants/cpfCnpjConstants';
import { TipoPessoaEnum } from '../models/TipoPessoa.enum';

export class CpfCnpjUtil {
  public validaCnpjCpf(pCnpjCpf: string): boolean {
    const cpfCnpjLimpo: string = this.limpaCnpjCpf(pCnpjCpf);

    if (cpfCnpjLimpo.length <= 11) {
      if (this.validaCpf(cpfCnpjLimpo) === true) {
        return true;
      }
    }
    if (this.validaCnpj(cpfCnpjLimpo) === true) {
      return true;
    }

    return false;
  }

  public limpaCnpjCpf(pCnpjCpf: string): string {
    let cpfCnpj: string = pCnpjCpf;
    cpfCnpj = cpfCnpj.replace(/\./g, '');
    cpfCnpj = cpfCnpj.replace(/-/g, '');
    cpfCnpj = cpfCnpj.replace(/\//g, '');
    cpfCnpj = cpfCnpj.replace(/[A-Za-z]/g, '');
    return cpfCnpj;
  }

  public validaCpf(pCpf: string): boolean {

    if (LISTA_CPF_INVALIDOS.includes(pCpf)) {
      return false;
    }

    let dv1: number;
    let dv2: number;
    let soma: number = 0;
    let resto: number;
    let pos: number;

    const cpfCnpjDv1 = parseInt(pCpf[9], 10);
    const cpfCnpjDv2 = parseInt(pCpf[10], 10);

    /**
     * Calcula o primeiro digito validador.
     */
    soma = 0;
    pos = 10;

    for (let i = 0; i < 9; i += 1) {
      soma += Number(pCpf[i]) * pos;
      pos -= 1;
    }

    resto = soma % 11;
    dv1 = resto < 2 ? 0 : 11 - resto;
    if (dv1 !== cpfCnpjDv1) {
      return false;
    }

    /**
     * Calcula o segundo digito validador.
     */
    soma = 0;
    pos = 11;
    for (let i = 0; i < 10; i += 1) {
      soma += Number(pCpf[i]) * pos;
      pos -= 1;
    }

    resto = soma % 11;
    dv2 = resto < 2 ? 0 : 11 - resto;

    if (dv2 !== cpfCnpjDv2) {
      return false;
    }

    // Cpf válido.
    return true;
  }

  public validaCnpj(pCnpj: string): boolean {

    if (LISTA_CNPJ_INVALIDOS.includes(pCnpj)) {
      return false;
    }

    let dv1: number;
    let dv2: number;
    let soma: number = 0;
    let resto: number;
    let pos: number;

    const cpfCnpjDv1 = parseInt(pCnpj[12], 10);
    const cpfCnpjDv2 = parseInt(pCnpj[13], 10);

    pos = 5;
    soma = 0;

    // Calcula o primeiro digito validador.

    for (let i = 0; i < 12; i += 1) {
      soma += Number(pCnpj[i]) * pos;
      pos -= 1;

      if (pos < 2) {
        pos = 9;
      }
    }

    resto = soma % 11;
    dv1 = resto < 2 ? 0 : 11 - resto;

    if (dv1 !== cpfCnpjDv1) {
      return false;
    }

    // Calcula o segundo digito validador.

    pos = 6;
    soma = 0;

    for (let i = 0; i < 13; i += 1) {
      soma += Number(pCnpj[i]) * pos;
      pos -= 1;
      if (pos < 2) {
        pos = 9;
      }
    }
    resto = soma % 11;
    dv2 = resto < 2 ? 0 : 11 - resto;

    if (dv2 !== cpfCnpjDv2) {
      return false;
    }

    return true;
  }

  public identificaTipoDePessoa(pCnpjCpf: string): TipoPessoaEnum | null {
    if (pCnpjCpf.length === 11) {
      return TipoPessoaEnum.cpf;
    }
    if (pCnpjCpf.length === 14) {
      return TipoPessoaEnum.cnpj;
    }
    return null;
  }

  public cnpjCpfFormatado(pCnpjCpf: string): string {
    if (!pCnpjCpf || pCnpjCpf.length < 11 || pCnpjCpf.length > 14) {
      return 'Cpf/Cnpj inválido';
    }
    if (pCnpjCpf.length === 11) {
      return `${pCnpjCpf.substring(0, 3)}.${pCnpjCpf.substring(3, 6)}.${pCnpjCpf.substring(6, 9)}-${pCnpjCpf.substring(9, 11)}`
    }
    return `${pCnpjCpf.substring(0, 2)}.${pCnpjCpf.substring(2, 5)}.${pCnpjCpf.substring(5, 8)}/${pCnpjCpf.substring(8, 12)}-${pCnpjCpf.substring(12, 14)}`;

  }
}

export default new CpfCnpjUtil();
