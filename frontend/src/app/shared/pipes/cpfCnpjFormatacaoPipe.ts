import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCnpjFormatacao'
})
export class cpfCnpjFormatacaoPipe implements PipeTransform {
  transform(cpfCnpj: string): string {
    if (!cpfCnpj || cpfCnpj.length < 11 || cpfCnpj.length > 14) {
      return 'Cpf/Cnpj inválido';
    }
    if (cpfCnpj.length === 11) {
      return `${cpfCnpj.substring(0, 3)}.${cpfCnpj.substring(3, 6)}.${cpfCnpj.substring(6, 9)}-${cpfCnpj.substring(9, 11)}`
    }
    return `${cpfCnpj.substring(0, 2)}.${cpfCnpj.substring(2, 5)}.${cpfCnpj.substring(5, 8)}/${cpfCnpj.substring(8, 12)}-${cpfCnpj.substring(12, 14)}`;
  }
}
