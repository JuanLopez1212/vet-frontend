import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersHome } from './owners-home';

describe('OwnersHome', () => {
  let component: OwnersHome;
  let fixture: ComponentFixture<OwnersHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnersHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnersHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
