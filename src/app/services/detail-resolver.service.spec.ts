import { TestBed } from '@angular/core/testing';
import { DetailResolver } from './detail-resolver.service';


describe('DetailService', () => {
  let service: DetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
