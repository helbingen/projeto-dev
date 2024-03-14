import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '../models/IHttpResponse';
import { lastValueFrom } from 'rxjs';
import { apiUrl } from '../../constants/environment';
import { ICriarEnderecoRequest } from '../models/endereco/ICriarEnderecoRequest';
import { IEditarEnderecoRequest } from '../models/endereco/IEditarEnderecoRequest';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  public async listarEnderecos(pIdentificacao: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.get<IHttpResponse>(`${apiUrl}/listar-endereco/${pIdentificacao}`).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async criarEndereco(pBody: ICriarEnderecoRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/criar-endereco`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async excluirEndereco(pIdentificacao: string, pCep: string): Promise<IHttpResponse> {
    const retornoHttp = this.http.delete<IHttpResponse>(`${apiUrl}/excluir-endereco`, {
      body: {
        identificacao: pIdentificacao,
        cep: pCep
      }
    }).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }

  public async editarEndereco(pBody: IEditarEnderecoRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.put<IHttpResponse>(`${apiUrl}/editar-endereco`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
}
