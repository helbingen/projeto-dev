import { Injectable } from '@angular/core';
import { ICriarContatoRequest } from '../models/contato/ICriarContatoRequest';
import { IHttpResponse } from '../models/IHttpResponse';
import { apiUrl } from '../../constants/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IEditarContatoRequest } from '../models/contato/IEditarContatoRequest';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  public async criarContato(pBody: ICriarContatoRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-contato`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarContatos(): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-contato/`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async editarContato(pBody: IEditarContatoRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-contato`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarContatoPorDescricao(pDescricaoContato: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-contato/${pDescricaoContato}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async excluirContato(pIdContato: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.delete<IHttpResponse>(`${apiUrl}/excluir-contato`, {
      body: {
        idContato: pIdContato,
      }
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

}
