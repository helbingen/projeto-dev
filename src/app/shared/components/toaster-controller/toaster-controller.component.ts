import { Component } from '@angular/core';
import { Toaster } from '@decisaosistemas/angular-ds';
import { Subscription } from 'rxjs';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'ds-toaster-controller',
  templateUrl: './toaster-controller.component.html',
  styleUrl: './toaster-controller.component.scss'
})
export class ToasterControllerComponent {

  public toasters: Toaster[] = [];

  private toasterSubscription!: Subscription;

  constructor(private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.toasterSubscription = this.toasterService.onToaster().subscribe((toaster: Toaster) => {
      this.toasters.push(toaster);
    });
  }

  public closed(toaster: Toaster): void {
    this.toasters = this.toasters.filter((t) => t.id !== toaster.id);
  }

}
