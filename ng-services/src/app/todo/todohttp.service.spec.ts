import { TestBed } from '@angular/core/testing';

import { TodohttpService } from './todohttp.service';

describe('TodohttpService', () => {
  let service: TodohttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodohttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
