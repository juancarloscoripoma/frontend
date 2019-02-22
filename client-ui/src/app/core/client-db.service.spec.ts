import { TestBed } from '@angular/core/testing';

import { ClientDbService } from './client-db.service';

describe('ClientDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDbService = TestBed.get(ClientDbService);
    expect(service).toBeTruthy();
  });
});
