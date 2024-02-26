import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaRepresentanteComponent } from './linha-representante.component';

describe('LinhaRepresentanteComponent', () => {
  let component: LinhaRepresentanteComponent;
  let fixture: ComponentFixture<LinhaRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinhaRepresentanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinhaRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
