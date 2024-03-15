import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepresentanteService } from '../../../../../shared/services/http/representante.service';
import identificacaoParamUtil from '../../../../../shared/utils/identificacaoParamUtil';
import { IRepresentanteInterface } from './models/IRepresentanteInterface';

@Component({
  selector: 'app-listar-representante',
  templateUrl: './listar-representante.component.html',
  styleUrl: './listar-representante.component.scss'
})
export class ListarRepresentanteComponent {

  public listaRepresentantes: IRepresentanteInterface[] = [];
  public idCliente = identificacaoParamUtil.obterIdentificacaoPelaRota(this.router.url);

  constructor(
    private router: Router,
    private representanteService: RepresentanteService,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.listarRepresentantes();
  }

  private async listarRepresentantes(): Promise<void> {
    const dados = (await this.representanteService.listarRepresentantes(this.idCliente)).dados as IRepresentanteInterface[];
    this.listaRepresentantes = dados;
  }


  public adicionarRepresentante(): void {
    this.router.navigate([this.router.url, 'adicionar']);
  }

  public async regarregarRepresentantes(pExclusaoEvent: boolean): Promise<void> {
    if (pExclusaoEvent) {
      await this.listarRepresentantes();
    }
  }

}
