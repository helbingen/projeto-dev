import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralDireitoComponent } from './menu-lateral-direito.component';

describe('MenuLateralDireitoComponent', () => {
  let component: MenuLateralDireitoComponent;
  let fixture: ComponentFixture<MenuLateralDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLateralDireitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLateralDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
