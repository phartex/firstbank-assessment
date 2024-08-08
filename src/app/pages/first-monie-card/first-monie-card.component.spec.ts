import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMonieCardComponent } from './first-monie-card.component';

describe('FirstMonieCardComponent', () => {
  let component: FirstMonieCardComponent;
  let fixture: ComponentFixture<FirstMonieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMonieCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstMonieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
