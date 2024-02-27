import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoHaDadosComponent } from './nao-ha-dados.component';

describe('NaoHaDadosComponent', () => {
  let component: NaoHaDadosComponent;
  let fixture: ComponentFixture<NaoHaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaoHaDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaoHaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
