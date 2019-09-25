import { TestBed } from '@angular/core/testing';

import { IdfPathService } from './idf-path.service';

describe('IdfPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdfPathService = TestBed.get(IdfPathService);
    expect(service).toBeTruthy();
  });
});
