import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogadoLayoutComponent } from './logado-layout.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('../../pages/inicio/inicio.module').then((m) => m.InicioModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogadoLayoutRoutingModule { }
