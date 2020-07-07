import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/dictionary.model';
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

  constructor(private processingService: ProcessingService) { }

  ngOnInit(): void {
    this.data$ = this.processingService.getProcessingType();
  }

}
