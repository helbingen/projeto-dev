import { Component } from '@angular/core';
import { Router } from '@angular/router';
import identificacaoParamUtil from '../../../shared/utils/identificacaoParamUtil';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.scss'
})
export class EditarClienteComponent {

  public identificacaoPessoa: string = '';

  constructor(private router: Router) {
    this.router.navigate([this.router.url, 'dadoscadastrais'])
    this.identificacaoPessoa = identificacaoParamUtil.obterIdentificacaoPelaRota(this.router.url)
  }

}
