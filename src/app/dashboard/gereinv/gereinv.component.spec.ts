import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereinvComponent } from './gereinv.component';

describe('GereinvComponent', () => {
  let component: GereinvComponent;
  let fixture: ComponentFixture<GereinvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GereinvComponent]
    });
    fixture = TestBed.createComponent(GereinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
