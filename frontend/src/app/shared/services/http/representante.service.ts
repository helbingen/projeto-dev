import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { apiUrl } from '../../constants/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { ICriarRepresentanteRequest } from '../models/representante/ICriarRepresentanteRequest';
import { IEditarRepresentanteRequest } from '../models/representante/IEditarRepresentanteRequest';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private http: HttpClient) { }

  public async listarRepresentantes(pIdCliente: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-representante/${pIdCliente}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async criarRepresentante(pBody: ICriarRepresentanteRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-representante`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarRepresentantePorIdentificacao(pIdCliente: string, pIdRepresentante: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-representante/${pIdCliente}/${pIdRepresentante}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async excluirRepresentante(pIdCliente: string, pIdRepresentante: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.delete<IHttpResponse>(`${apiUrl}/excluir-representante/`, {
      body: {
        idCliente: pIdCliente,
        identificacao: pIdRepresentante,
      }
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async editarRepresentante(pBody: IEditarRepresentanteRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-representante`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
}
