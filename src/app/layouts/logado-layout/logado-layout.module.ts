import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogadoLayoutRoutingModule } from './logado-layout-routing.module';
import { LogadoLayoutComponent } from './logado-layout.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { SideNavModule } from '@decisaosistemas/angular-ds';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { InicioModule } from '../../pages/inicio/inicio.module';


@NgModule({
  declarations: [
    LogadoLayoutComponent,
  ],
  imports: [
    CommonModule,
    LogadoLayoutRoutingModule,
    HeaderModule,
    FooterModule,
    SideNavModule,
    InicioModule,
  ]
})
export class LogadoLayoutModule { }
