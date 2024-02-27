import { Injectable } from '@angular/core';
import { ITosterConfig, Toaster, ToasterTipoEnum } from '@decisaosistemas/angular-ds';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  public readonly eventoNovoToaster = new Subject<Toaster>();

  public onToaster(): Observable<Toaster> {
    return this.eventoNovoToaster.asObservable();
  }

  public showInfo(pTexto: string, pConfig?: ITosterConfig): void {
    this.open(new Toaster(pTexto, ToasterTipoEnum.info, pConfig));
  }

  public showSuccess(pTexto: string, pConfig?: ITosterConfig): void {
    this.open(new Toaster(pTexto, ToasterTipoEnum.success, pConfig));
  }

  public showDanger(pTexto: string, pConfig?: ITosterConfig): void {
    this.open(new Toaster(pTexto, ToasterTipoEnum.danger, pConfig));
  }

  public showAlert(pTexto: string, pConfig?: ITosterConfig): void {
    this.open(new Toaster(pTexto, ToasterTipoEnum.alert, pConfig));
  }

  public showSystem(pTexto: string, pConfig?: ITosterConfig): void {
    this.open(new Toaster(pTexto, ToasterTipoEnum.system, pConfig));
  }

  private open(alert: Toaster): void {
    this.eventoNovoToaster.next(alert);
  }
}
