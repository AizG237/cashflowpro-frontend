import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereplanepComponent } from './gereplanep.component';

describe('GereplanepComponent', () => {
  let component: GereplanepComponent;
  let fixture: ComponentFixture<GereplanepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GereplanepComponent]
    });
    fixture = TestBed.createComponent(GereplanepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
