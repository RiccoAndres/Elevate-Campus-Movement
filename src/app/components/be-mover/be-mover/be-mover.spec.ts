import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeMover } from './be-mover';

describe('BeMover', () => {
  let component: BeMover;
  let fixture: ComponentFixture<BeMover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeMover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeMover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
