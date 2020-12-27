import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBackgroundComponent } from './light-background.component';

describe('LightBackgroundComponent', () => {
  let component: LightBackgroundComponent;
  let fixture: ComponentFixture<LightBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
