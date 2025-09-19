import { TestBed } from '@angular/core/testing';

import { MossUiLibService } from './moss-ui-lib.service';

describe('MossUiLibService', () => {
  let service: MossUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MossUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
