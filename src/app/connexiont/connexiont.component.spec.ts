import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexiontComponent } from './connexiont.component';

describe('ConnexiontComponent', () => {
  let component: ConnexiontComponent;
  let fixture: ComponentFixture<ConnexiontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnexiontComponent]
    });
    fixture = TestBed.createComponent(ConnexiontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
