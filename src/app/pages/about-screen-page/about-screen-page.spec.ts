import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutScreenPage } from './about-screen-page';

describe('AboutScreenPage', () => {
  let component: AboutScreenPage;
  let fixture: ComponentFixture<AboutScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutScreenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
