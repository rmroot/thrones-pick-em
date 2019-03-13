import { TestBed } from '@angular/core/testing';

import { CalculateScoreService } from './calculate-score.service';

describe('CalculateScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateScoreService = TestBed.get(CalculateScoreService);
    expect(service).toBeTruthy();
  });
});
