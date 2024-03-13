import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '../models/IHttpResponse';
import { apiUrl } from '../../constants/environment';
import { lastValueFrom } from 'rxjs';
import { ICriarClienteRequest } from '../models/cliente/ICriarClienteRequest';

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
}
