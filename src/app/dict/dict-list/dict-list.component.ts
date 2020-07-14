import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { BehaviorSubject, Observable } from 'rxjs';
import { TablesSettingsService } from '../../services/tables-settings.service';
import { DictTableItem } from '../../shared/models/dictionary.model';

@Component({
  selector: 'app-dict-list',
  templateUrl: './dict-list.component.html',
  styleUrls: ['./dict-list.component.css']
})
export class DictListComponent implements OnInit {

  @Input() title = 'Page Title';
  @Input() data$: Observable<DictTableItem[]>;
  @Output() save = new EventEmitter();

  gridOptions: GridOptions;
  chosenRow$ = new BehaviorSubject<DictTableItem>(null);

  constructor(
    private dictService: TablesSettingsService
    ) { }

  ngOnInit(): void {
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

  onSave($event: DictTableItem) {
    this.save.emit($event);
  }

  onCancel($event) {
    this.chosenRow$.next(null);
  }

}
