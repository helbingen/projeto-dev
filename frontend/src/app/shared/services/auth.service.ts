import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private urlBase = 'http://localhost:4200';

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuarioExist = localStorage.getItem('nomeUsuario');
    const emailExist = localStorage.getItem('emailAutenticado');
    if (usuarioExist && emailExist) {
      return true;
    }
    window.location.href = `${this.urlBase}/login`;
    return false
  }

}
