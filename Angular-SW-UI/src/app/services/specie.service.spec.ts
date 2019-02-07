import { TestBed } from '@angular/core/testing';

import { SpecieService } from './specie.service';

describe('SpecieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SpecieService = TestBed.get(SpecieService);
        expect(service).toBeTruthy();
    });
});
