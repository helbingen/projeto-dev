import { NgModule } from '@angular/core';
import { CepFormatacaoPipe } from './cepFormatacaoPipe';
import { dataFormatacaoPipe } from './dataFormatacaoPipe';
import { cpfCnpjFormatacaoPipe } from './cpfCnpjFormatacaoPipe';

@NgModule({
  declarations: [CepFormatacaoPipe, dataFormatacaoPipe, cpfCnpjFormatacaoPipe],
  exports: [CepFormatacaoPipe, dataFormatacaoPipe, cpfCnpjFormatacaoPipe],
})
export class FormatacaoPipeModule { }
