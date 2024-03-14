import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '../models/IHttpResponse';
import { apiUrl } from '../../constants/environment';
import { lastValueFrom } from 'rxjs';
import { ICriarClienteRequest } from '../models/cliente/ICriarClienteRequest';
import { IEditarClienteRequest } from '../models/cliente/IEditarClienteRequest';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public async listarClientes(): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-cliente`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async criarCliente(pBody: ICriarClienteRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-cliente`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarClientePorIdentificacao(pIdentificao: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-cliente/${pIdentificao}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async excluirCliente(pIdentificao: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.delete<IHttpResponse>(`${apiUrl}/excluir-cliente/${pIdentificao}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async editarCliente(pBody: IEditarClienteRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-cliente`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
}
