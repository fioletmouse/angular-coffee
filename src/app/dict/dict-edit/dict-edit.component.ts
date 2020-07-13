import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';

@Component({
  selector: 'app-dict-edit',
  templateUrl: './dict-edit.component.html',
  styleUrls: ['./dict-edit.component.css']
})
export class DictEditComponent implements OnInit {
  @Input() clickedRow$: Observable<DictTableItem>;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    this.save.emit({d: 'df', f: 'df'});
  }
}
