import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbnPodcastComponent } from './fbn-podcast.component';

describe('FbnPodcastComponent', () => {
  let component: FbnPodcastComponent;
  let fixture: ComponentFixture<FbnPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbnPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbnPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
