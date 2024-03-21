import { Component } from '@angular/core';
import { SideNavItemRouterLink, SideNavItemTarget } from '@decisaosistemas/angular-ds';

@Component({
  selector: 'app-logado-layout',
  templateUrl: './logado-layout.component.html',
  styleUrl: './logado-layout.component.scss'
})
export class LogadoLayoutComponent {

  public menus: (SideNavItemTarget | SideNavItemRouterLink)[] = [];

  ngOnInit(): void {
    this.menus = [
      new SideNavItemRouterLink('Início', 'ds-icon-home', `/inicio`),
      new SideNavItemRouterLink('Cliente', 'ds-icon-people', `/cliente`),
      new SideNavItemRouterLink('Contatos', 'ds-icon-file-check', `/contatos`),
    ];
  }

}
