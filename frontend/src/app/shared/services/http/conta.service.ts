import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../constants/environment';
import { lastValueFrom } from 'rxjs';
import { IHttpResponse } from '../models/IHttpResponse';
import { ICriarContaRequest } from '../models/conta/ICriarContaRequest';
import { ILoginRequest } from '../models/conta/ILoginRequest';
import { IObterDadosContaLogadaRequest } from '../models/conta/IObterDadosContaLogadaRequest';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  public async criarConta(pBody: ICriarContaRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-conta`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
  public async login(pBody: ILoginRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/login`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
  public async obterDadosContaLogada(pBody: IObterDadosContaLogadaRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/listar-conta`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async editarConta(pBody: ICriarContaRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-conta`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }


}
