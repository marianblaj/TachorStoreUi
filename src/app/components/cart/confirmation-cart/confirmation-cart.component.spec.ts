import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCartComponent } from './confirmation-cart.component';

describe('ConfirmationCartComponent', () => {
  let component: ConfirmationCartComponent;
  let fixture: ComponentFixture<ConfirmationCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
