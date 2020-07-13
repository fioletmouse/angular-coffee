import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';
import { DictService } from './../../services/dict.service';
import { ProcessingService } from './processing.service';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css'],
  providers: [ ProcessingService ]
})
export class ProcessingComponent implements OnInit {

  title = 'Beans Processing';
  data$: Observable<DictTableItem[]>;
  gridOptions: GridOptions;

  constructor(
    private processingService: ProcessingService,
    private dictService: DictService
    ) { }

  ngOnInit(): void {
    this.data$ = this.processingService.getProcessingType();
    this.gridOptions = this.dictService.dictGridOptions;
  }

}
