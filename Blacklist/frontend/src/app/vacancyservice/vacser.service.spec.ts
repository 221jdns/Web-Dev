import { TestBed } from '@angular/core/testing';

import { VacserService } from './vacser.service';

describe('VacserService', () => {
  let service: VacserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
