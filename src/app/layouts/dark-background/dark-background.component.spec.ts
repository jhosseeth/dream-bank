import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBackgroundComponent } from './dark-background.component';

describe('DarkBackgroundComponent', () => {
  let component: DarkBackgroundComponent;
  let fixture: ComponentFixture<DarkBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
