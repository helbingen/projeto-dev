import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnderecoComponent } from './card-endereco.component';

describe('CardEnderecoComponent', () => {
  let component: CardEnderecoComponent;
  let fixture: ComponentFixture<CardEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
