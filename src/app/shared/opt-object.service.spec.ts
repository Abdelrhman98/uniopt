import { TestBed } from '@angular/core/testing';

import { OptObjectService } from './opt-object.service';

describe('OptObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptObjectService = TestBed.get(OptObjectService);
    expect(service).toBeTruthy();
  });
});
