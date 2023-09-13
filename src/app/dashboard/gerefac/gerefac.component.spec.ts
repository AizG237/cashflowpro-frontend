import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerefacComponent } from './gerefac.component';

describe('GerefacComponent', () => {
  let component: GerefacComponent;
  let fixture: ComponentFixture<GerefacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerefacComponent]
    });
    fixture = TestBed.createComponent(GerefacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
