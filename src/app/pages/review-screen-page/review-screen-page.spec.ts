import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewScreenPage } from './review-screen-page';

describe('ReviewScreenPage', () => {
  let component: ReviewScreenPage;
  let fixture: ComponentFixture<ReviewScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewScreenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
