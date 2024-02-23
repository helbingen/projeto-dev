import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRepresentanteComponent } from './listar-representante.component';

describe('ListarRepresentanteComponent', () => {
  let component: ListarRepresentanteComponent;
  let fixture: ComponentFixture<ListarRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarRepresentanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
