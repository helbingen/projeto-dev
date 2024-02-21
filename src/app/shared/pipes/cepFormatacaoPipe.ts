import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cepFormatacao',
})
export class CepFormatacaoPipe implements PipeTransform {
  transform(pValue: string | null | undefined): string {
    if (pValue === null || pValue === undefined) {
      return '';
    }

    const valorLimpo = pValue.replace(/\D/g, '');
    const valorTratado = `${valorLimpo.substring(0, 5)}-${valorLimpo.substring(5)}`;
    return valorTratado;
  }
}
