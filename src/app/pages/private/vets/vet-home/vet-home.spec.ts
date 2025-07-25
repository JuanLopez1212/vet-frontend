import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetHome } from './vet-home';

describe('VetHome', () => {
  let component: VetHome;
  let fixture: ComponentFixture<VetHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
