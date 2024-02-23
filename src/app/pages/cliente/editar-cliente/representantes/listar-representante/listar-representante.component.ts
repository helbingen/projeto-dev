import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-representante',
  templateUrl: './listar-representante.component.html',
  styleUrl: './listar-representante.component.scss'
})
export class ListarRepresentanteComponent {

  constructor(private router: Router) { }

  public adicionarRepresentante(): void {
    this.router.navigate([this.router.url, 'adicionar']);
  }

}
