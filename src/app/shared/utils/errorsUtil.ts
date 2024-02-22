import { ValidationErrors } from '@angular/forms';
import { TCustomErros } from '@decisaosistemas/angular-ds';

export class ErrorsUtil {
  static getErrors: TCustomErros = (pLabel: string, pIdentificadorErro: string, pValorValidado: ValidationErrors | null) => {
    let error = '';
    pValorValidado = {
      required: `Campo obrigatório.`,
      email: `E-mail fora do padrão: email@email.com.`,
      senhaForaDoPadrao: `A senha deve conter 8 dígitos, e pelo menos um caractere especial, letra maiúscula ou minúscula.`,
      cnpjCpfInvalido: `Digite um CNPJ/CPF válido.`,
      dataInvalida: `Insira uma data válida.`,
      cepInexistente: `CEP não existe, digite um CEP válido.`,
      telefoneInvalido: `Telefone inválido.`
    };
    const arrayErros = Object.keys(pValorValidado);
    for (let erro of arrayErros) {
      if (pIdentificadorErro === erro) {
        error = `${pLabel} ${pValorValidado[erro]}`;
      }
    }
    return error ?? null;
  };
}
