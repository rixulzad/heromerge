/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuperheroService } from './superhero-service';

describe('SuperheroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperheroService]
    });
  });

  it('should ...', inject([SuperheroService], (service: SuperheroService) => {
    expect(service).toBeTruthy();
  }));
});
