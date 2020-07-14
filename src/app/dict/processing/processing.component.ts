import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';
import { ProcessingService } from './processing.service';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  providers: [ ProcessingService ]
})
export class ProcessingComponent implements OnInit {

  title = 'Beans Processing';
  data$: Observable<DictTableItem[]>;

  constructor(
    private processingService: ProcessingService,
    ) { }

  ngOnInit(): void {
    this.data$ = this.processingService.getProcessingType();
  }

  onSave($event: DictTableItem) {
    this.processingService.saveOrUpdate($event);
  }
}
