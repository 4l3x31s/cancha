import { TestBed } from '@angular/core/testing';

import { TamanioService } from './tamanio.service';

describe('TamanioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TamanioService = TestBed.get(TamanioService);
    expect(service).toBeTruthy();
  });
});
