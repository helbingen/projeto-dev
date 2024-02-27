import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaTelefoneEnderecoComponent } from './linha-telefone-endereco.component';

describe('LinhaTelefoneEnderecoComponent', () => {
  let component: LinhaTelefoneEnderecoComponent;
  let fixture: ComponentFixture<LinhaTelefoneEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinhaTelefoneEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinhaTelefoneEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
