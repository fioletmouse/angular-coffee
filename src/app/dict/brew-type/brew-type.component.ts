import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { BehaviorSubject, Observable } from 'rxjs';
import { TablesSettingsService } from '../../services/tables-settings.service';
import { DictTableItem } from '../../shared/models/dictionary.model';
import { BrewTypeService } from './brew-type.service';

@Component({
  selector: 'app-brew-type',
  templateUrl: './brew-type.component.html',
  styleUrls: ['./brew-type.component.css'],
  providers: [BrewTypeService]
})
export class BrewTypeComponent implements OnInit {
  title = 'Methods for Brewing Coffee';
  data$: Observable<DictTableItem[]>;
  gridOptions: GridOptions;
  chosenRow$ = new BehaviorSubject<DictTableItem>(null);

  constructor(
    private brewService: BrewTypeService,
    private dictService: TablesSettingsService
    ) { }

  ngOnInit(): void {
    this.data$ = this.brewService.getBrewType();
    this.gridOptions = this.dictService.dictGridOptions;
    this.gridOptions.onRowClicked = this.onRowClickHandler;
  }

  onRowClickHandler = (event) => {
    const chosenRow = this.chosenRow$.getValue();

    if (chosenRow?.id === event.data.id) {
      this.chosenRow$.next(null);
      return;
    }

    this.chosenRow$.next(event.data);
  }

}
