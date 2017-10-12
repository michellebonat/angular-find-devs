import { TestBed, inject } from '@angular/core/testing';

import { SearchUsersService } from './search-users.service';

describe('SearchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchUsersService]
    });
  });

  it('should be created', inject([SearchUsersService], (service: SearchUsersService) => {
    expect(service).toBeTruthy();
  }));
});
