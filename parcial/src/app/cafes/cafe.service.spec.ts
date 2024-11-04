/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CafeService]
    });
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
