import { TestBed } from '@angular/core/testing';

import { ServiceReservaService } from './serReserva.service';

describe('ServiceReservaService', () => {
  let service: ServiceReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
