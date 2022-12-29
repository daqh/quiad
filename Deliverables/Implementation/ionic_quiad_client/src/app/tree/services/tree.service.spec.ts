import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TreeService } from './tree.service';

describe('TreeService', () => {
  let service: TreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
