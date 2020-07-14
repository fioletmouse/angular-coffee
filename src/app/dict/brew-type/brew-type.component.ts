import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private brewService: BrewTypeService,
    ) { }

  ngOnInit(): void {
    this.data$ = this.brewService.getBrewType();
  }

  onSave($event: DictTableItem) {
    this.brewService.saveOrUpdate($event);
  }
}
