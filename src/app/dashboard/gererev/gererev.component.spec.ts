import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererevComponent } from './gererev.component';

describe('GererevComponent', () => {
  let component: GererevComponent;
  let fixture: ComponentFixture<GererevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererevComponent]
    });
    fixture = TestBed.createComponent(GererevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
