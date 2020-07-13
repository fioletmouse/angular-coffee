import { TestBed } from '@angular/core/testing';
import { TablesSettingsService } from './tables-settings.service';


describe('DictService', () => {
  let service: TablesSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
