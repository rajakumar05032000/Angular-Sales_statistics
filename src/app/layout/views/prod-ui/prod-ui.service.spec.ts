import { TestBed } from '@angular/core/testing';

import { ProdUiService } from './prod-ui.service';

describe('ProdUiService', () => {
  let service: ProdUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
