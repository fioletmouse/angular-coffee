import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';

@Component({
  selector: 'app-dict-edit',
  templateUrl: './dict-edit.component.html',
  styleUrls: ['./dict-edit.component.css']
})
export class DictEditComponent implements OnInit, OnDestroy {
  @Input() clickedRow$: Observable<DictTableItem>;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  addEditForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255),
    ]),
    isActive: new FormControl(null),
  });

  get dictName() {
    return this.addEditForm.get('name') as FormControl;
  }
  get dictIsActive() {
    return this.addEditForm.get('isActive') as FormControl;
  }

  clickedRowSub: Subscription;

  constructor() { }

  ngOnInit() {
    if (this.clickedRow$ !== null) {
      this.clickedRowSub = this.clickedRow$
        .subscribe({
          next: (value: DictTableItem) => {
            if (value !== null) {
              this.dictName.setValue(value.name);
              this.dictIsActive.setValue(value.isActive);
            }
          },
          error: err => console.error(err),
        });
    }
  }

  ngOnDestroy() {
    this.clickedRowSub.unsubscribe();
  }

  onSave() {
    this.save.emit(this.addEditForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
