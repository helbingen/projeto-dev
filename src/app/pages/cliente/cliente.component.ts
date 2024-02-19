import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {

  constructor(private router: Router) {

  }

  public adicionarCliente(): void {
    this.router.navigate(['adicionar'])
  }

}
