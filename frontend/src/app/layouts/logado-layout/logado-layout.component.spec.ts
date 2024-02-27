import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadoLayoutComponent } from './logado-layout.component';

describe('LogadoLayoutComponent', () => {
  let component: LogadoLayoutComponent;
  let fixture: ComponentFixture<LogadoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogadoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogadoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
