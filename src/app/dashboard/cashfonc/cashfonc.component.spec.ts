import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashfoncComponent } from './cashfonc.component';

describe('CashfoncComponent', () => {
  let component: CashfoncComponent;
  let fixture: ComponentFixture<CashfoncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashfoncComponent]
    });
    fixture = TestBed.createComponent(CashfoncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
