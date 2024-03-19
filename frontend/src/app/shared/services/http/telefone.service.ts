import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { apiUrl } from '../../constants/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { ICriarTelefoneRequest } from '../models/telefone/ICriarTelefoneRequest';
import { IListarTelefonePorIdRequest } from '../models/telefone/IListarTelefonePorIdRequest';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor(private http: HttpClient) { }

  public async criarTelefone(pBody: ICriarTelefoneRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-telefone`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarTelefones(pIdentificacao: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-telefone/${pIdentificacao}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async excluirTelefone(pIdentificacao: string, pNumero: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.delete<IHttpResponse>(`${apiUrl}/excluir-telefone`, {
      body: {
        identificacao: pIdentificacao,
        numero: pNumero
      }
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarTelefonePorId(pBody: IListarTelefonePorIdRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/listar-telefone`, {
      identificacao: pBody.identificacao,
      numero: pBody.numero,
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
  public async editarTelefone(pBody: ICriarTelefoneRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-telefone`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
}
