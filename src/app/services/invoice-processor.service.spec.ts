import { TestBed } from '@angular/core/testing';

import { InvoiceProcessorService } from './invoice-processor.service';

describe('InvoiceProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceProcessorService = TestBed.get(InvoiceProcessorService);
    expect(service).toBeTruthy();
  });
});
