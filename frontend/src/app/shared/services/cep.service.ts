import { Injectable } from '@angular/core';
import { ICepInterface } from './models/ICepInterface';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private urlApi = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  public async obterDadosViaCep(pCep: string): Promise<ICepInterface> {
    try {
      const cepFormatado = pCep.replace(/\D/g, "");
      const retornoHttp = this.http.get<ICepInterface>(`${this.urlApi}${cepFormatado}/json/`).pipe();
      const dadosCep = await lastValueFrom(retornoHttp);
      return dadosCep;
    } catch (error) {
      throw error
    }
  }

}
