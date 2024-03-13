import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormatacao'
})
export class dataFormatacaoPipe implements PipeTransform {
  transform(dataPostgres: string): string {
    if (!dataPostgres || dataPostgres.length < 10) {
      return 'Data inválida';
    }

    const dataFormatada = dataPostgres.substring(0, 10)

    const dia = dataFormatada.substring(8, 10);
    const mes = dataFormatada.substring(5, 7);
    const ano = dataFormatada.substring(0, 4);

    return `${dia}/${mes}/${ano}`;
  }
}
