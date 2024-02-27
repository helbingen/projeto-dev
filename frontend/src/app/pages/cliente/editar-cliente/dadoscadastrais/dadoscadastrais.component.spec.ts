import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoscadastraisComponent } from './dadoscadastrais.component';

describe('DadoscadastraisComponent', () => {
  let component: DadoscadastraisComponent;
  let fixture: ComponentFixture<DadoscadastraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadoscadastraisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadoscadastraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
