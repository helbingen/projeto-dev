import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { Breadcrumb } from '@decisaosistemas/angular-ds';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    data: {
      breadcrumb: new Breadcrumb('Inicio', 'Inicio'),
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
