import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePartner } from './be-partner';

describe('BePartner', () => {
  let component: BePartner;
  let fixture: ComponentFixture<BePartner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BePartner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BePartner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
