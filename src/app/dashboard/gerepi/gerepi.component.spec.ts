import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerepiComponent } from './gerepi.component';

describe('GerepiComponent', () => {
  let component: GerepiComponent;
  let fixture: ComponentFixture<GerepiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerepiComponent]
    });
    fixture = TestBed.createComponent(GerepiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
