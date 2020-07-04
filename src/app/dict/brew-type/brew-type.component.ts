import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictTableItem } from 'src/app/elements/dict-table/dict-table-datasource';
import { BrewTypeService } from './../../services/brew-type.service';

@Component({
  selector: 'app-brew-type',
  templateUrl: './brew-type.component.html',
  styleUrls: ['./brew-type.component.css']
})
export class BrewTypeComponent implements OnInit {
  title = 'Methods for Brewing Coffee';
  data$: Observable<DictTableItem[]>;

  constructor(private brewService: BrewTypeService) { }

  ngOnInit(): void {
    this.data$ = this.brewService.getBrewType();
  }

}
