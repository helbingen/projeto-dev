import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRepresentanteComponent } from './listar-representante/listar-representante.component';
import { DadosCadastraisRepresentanteComponent } from './dados-cadastrais-representante/dados-cadastrais-representante.component';
import { RepresentantesComponent } from './representantes.component';


const routes: Routes = [
  {
    path: '',
    component: RepresentantesComponent,
    children: [
      {
        path: '',
        component: ListarRepresentanteComponent,
      },
      {
        path: 'adicionar',
        component: DadosCadastraisRepresentanteComponent,
      },
      {
        path: ':idRepresentante',
        children: [
          {
            path: 'editar',
            component: DadosCadastraisRepresentanteComponent,
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentantesRoutingModule { }
