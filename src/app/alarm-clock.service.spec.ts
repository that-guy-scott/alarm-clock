import { TestBed } from '@angular/core/testing';

import { AlarmClockService } from './alarm-clock.service';

describe('AlarmClockService', () => {
  let service: AlarmClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlarmClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
