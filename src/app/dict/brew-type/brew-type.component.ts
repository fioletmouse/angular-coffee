import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';
import { DictService } from './../../services/dict.service';
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

  constructor(
    private brewService: BrewTypeService,
    private dictService: DictService
    ) { }

  ngOnInit(): void {
    this.data$ = this.brewService.getBrewType();
    this.gridOptions = this.dictService.dictGridOptions;
  }

}
