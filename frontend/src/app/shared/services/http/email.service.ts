import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { apiUrl } from '../../constants/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { ICriarEmailRequest } from '../models/email/ICriarEmailRequest';
import { IListarEmailPorIdRequest } from '../models/email/IListarEmailPorIdRequest';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public async criarEmail(pBody: ICriarEmailRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-email`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarEmails(pIdentificacao: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-email/${pIdentificacao}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async excluirEmail(pIdentificacao: string, pEmail: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.delete<IHttpResponse>(`${apiUrl}/excluir-email`, {
      body: {
        identificacao: pIdentificacao,
        email: pEmail
      }
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async listarEmailPorId(pBody: IListarEmailPorIdRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/listar-email`, {
      identificacao: pBody.identificacao,
      email: pBody.email,
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
  public async editarEmail(pBody: ICriarEmailRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-email`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
}
