import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesScreenPage } from './services-screen-page';

describe('ServicesScreenPage', () => {
  let component: ServicesScreenPage;
  let fixture: ComponentFixture<ServicesScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesScreenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
