import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoModalComponent } from './endereco-modal.component';

describe('EnderecoModalComponent', () => {
  let component: EnderecoModalComponent;
  let fixture: ComponentFixture<EnderecoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnderecoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
