import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { Breadcrumb } from '@decisaosistemas/angular-ds';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    data: {
      breadcrumb: new Breadcrumb('Cliente', 'Cliente'),
    },
    children: [
      {
        path: 'adicionar-cliente',
        component: AdicionarClienteComponent,
        data: {
          breadcrumb: new Breadcrumb('Adicionar cliente', 'Adicionar cliente'),
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
