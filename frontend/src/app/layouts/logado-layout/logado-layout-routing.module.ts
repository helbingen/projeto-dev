import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogadoLayoutComponent } from './logado-layout.component';
import { AuthService } from '../../shared/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LogadoLayoutComponent,
    children: [
      {
        path: 'inicio',
        canActivate: [AuthService],
        loadChildren: () => import('../../pages/inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'cliente',
        canActivate: [AuthService],
        loadChildren: () => import('../../pages/cliente/cliente.module').then((m) => m.ClienteModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogadoLayoutRoutingModule { }
