import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinhaPessoaComponent } from './linha-pessoa.component';
import { BadgeModule, TooltipModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [LinhaPessoaComponent],
  imports: [
    CommonModule,
    TooltipModule,
    BadgeModule,
  ],
  exports: [LinhaPessoaComponent]
})
export class LinhaPessoaModule { }
