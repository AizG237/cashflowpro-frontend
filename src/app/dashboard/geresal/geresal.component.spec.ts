import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeresalComponent } from './geresal.component';

describe('GeresalComponent', () => {
  let component: GeresalComponent;
  let fixture: ComponentFixture<GeresalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeresalComponent]
    });
    fixture = TestBed.createComponent(GeresalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
