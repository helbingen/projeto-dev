import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.scss'
})
export class ListarClienteComponent {

  constructor(public router: Router) {
  }

  public adicionarCliente(): void {
    this.router.navigate([this.router.url, 'adicionar-cliente']);
  }

}
