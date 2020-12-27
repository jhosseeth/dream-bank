import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRequestComponent } from './successful-request.component';

describe('SuccessfulRequestComponent', () => {
  let component: SuccessfulRequestComponent;
  let fixture: ComponentFixture<SuccessfulRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
