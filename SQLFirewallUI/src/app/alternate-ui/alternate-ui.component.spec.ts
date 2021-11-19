import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateUIComponent } from './alternate-ui.component';

describe('AlternateUIComponent', () => {
  let component: AlternateUIComponent;
  let fixture: ComponentFixture<AlternateUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternateUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
