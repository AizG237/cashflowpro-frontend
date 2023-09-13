import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptempComponent } from './cmptemp.component';

describe('CmptempComponent', () => {
  let component: CmptempComponent;
  let fixture: ComponentFixture<CmptempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmptempComponent]
    });
    fixture = TestBed.createComponent(CmptempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
