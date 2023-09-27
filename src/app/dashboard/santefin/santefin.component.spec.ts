import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantefinComponent } from './santefin.component';

describe('SantefinComponent', () => {
  let component: SantefinComponent;
  let fixture: ComponentFixture<SantefinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantefinComponent]
    });
    fixture = TestBed.createComponent(SantefinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
