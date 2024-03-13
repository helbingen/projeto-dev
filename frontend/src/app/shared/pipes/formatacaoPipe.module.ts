import { NgModule } from '@angular/core';
import { CepFormatacaoPipe } from './cepFormatacaoPipe';
import { dataFormatacaoPipe } from './dataFormatacaoPipe';

@NgModule({
  declarations: [CepFormatacaoPipe, dataFormatacaoPipe],
  exports: [CepFormatacaoPipe, dataFormatacaoPipe],
})
export class FormatacaoPipeModule { }
