import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounteHeader } from './accounte-header';

describe('AccounteHeader', () => {
  let component: AccounteHeader;
  let fixture: ComponentFixture<AccounteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccounteHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccounteHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
