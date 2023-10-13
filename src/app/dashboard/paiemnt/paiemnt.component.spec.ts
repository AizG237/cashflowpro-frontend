import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiemntComponent } from './paiemnt.component';

describe('PaiemntComponent', () => {
  let component: PaiemntComponent;
  let fixture: ComponentFixture<PaiemntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiemntComponent]
    });
    fixture = TestBed.createComponent(PaiemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
