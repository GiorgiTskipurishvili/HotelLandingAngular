import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsScreenPage } from './rooms-screen-page';

describe('RoomsScreenPage', () => {
  let component: RoomsScreenPage;
  let fixture: ComponentFixture<RoomsScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsScreenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
