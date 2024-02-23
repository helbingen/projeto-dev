import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCadastraisRepresentanteComponent } from './dados-cadastrais-representante.component';

describe('DadosCadastraisRepresentanteComponent', () => {
  let component: DadosCadastraisRepresentanteComponent;
  let fixture: ComponentFixture<DadosCadastraisRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosCadastraisRepresentanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosCadastraisRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
