import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterControllerComponent } from './toaster-controller.component';

describe('ToasterControllerComponent', () => {
  let component: ToasterControllerComponent;
  let fixture: ComponentFixture<ToasterControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToasterControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToasterControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
