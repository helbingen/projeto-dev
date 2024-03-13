import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinhaPessoaComponent } from './linha-pessoa.component';
import { BadgeModule, TooltipModule } from '@decisaosistemas/angular-ds';
import { dataFormatacaoPipe } from '../../pipes/dataFormatacaoPipe';
import { FormatacaoPipeModule } from '../../pipes/formatacaoPipe.module';



@NgModule({
  declarations: [LinhaPessoaComponent],
  imports: [
    CommonModule,
    TooltipModule,
    BadgeModule,
    FormatacaoPipeModule
  ],
  exports: [LinhaPessoaComponent]
})
export class LinhaPessoaModule { }
