import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesComponent } from './representantes.component';

describe('RepresentantesComponent', () => {
  let component: RepresentantesComponent;
  let fixture: ComponentFixture<RepresentantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepresentantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
