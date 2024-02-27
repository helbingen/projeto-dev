import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarClienteComponent } from './adicionar-cliente.component';

describe('AdicionarClienteComponent', () => {
  let component: AdicionarClienteComponent;
  let fixture: ComponentFixture<AdicionarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
