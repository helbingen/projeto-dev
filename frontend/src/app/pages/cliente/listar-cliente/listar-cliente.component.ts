import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../shared/services/http/cliente.service';
import { NClienteNamespace } from '../../../shared/models/ClienteNamespace';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.scss'
})
export class ListarClienteComponent {

  public listaCliente: NClienteNamespace.IListarClienteInterface[] = [];

  constructor(public router: Router, private clienteService: ClienteService) {
  }

  public async ngOnInit(): Promise<void> {
    this.listaCliente = await this.listarCliente();
  }

  public async listarCliente(): Promise<NClienteNamespace.IListarClienteInterface[]> {
    const clientesDb = (await this.clienteService.listarClientes()).dados as NClienteNamespace.IListarClienteInterface[];
    return clientesDb;
  }

  public adicionarCliente(): void {
    this.router.navigate([this.router.url, 'adicionar-cliente']);
  }

}
