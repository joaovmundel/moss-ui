import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MossUiLibComponent } from './moss-ui-lib.component';

describe('MossUiLibComponent', () => {
  let component: MossUiLibComponent;
  let fixture: ComponentFixture<MossUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MossUiLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MossUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
