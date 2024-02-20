import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { Breadcrumb } from '@decisaosistemas/angular-ds';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DadoscadastraisComponent } from './editar-cliente/dadoscadastrais/dadoscadastrais.component';

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
      },
      {
        path: 'editar-cliente',
        component: EditarClienteComponent,
        data: {
          breadcrumb: new Breadcrumb('Editar cliente', 'Editar cliente'),
        },
        children: [
          {
            path: 'dadoscadastrais',
            component: DadoscadastraisComponent
          },
          // {
          //   path: 'localizacao',
          //   component:
          // },
          // {
          //   path: 'representantes',
          //   component:
          // }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
