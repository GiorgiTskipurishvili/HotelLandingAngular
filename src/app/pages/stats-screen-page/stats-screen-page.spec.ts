import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsScreenPage } from './stats-screen-page';

describe('StatsScreenPage', () => {
  let component: StatsScreenPage;
  let fixture: ComponentFixture<StatsScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsScreenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
