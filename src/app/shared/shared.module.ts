import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DictEditComponent } from './dict-edit/dict-edit.component';



@NgModule({
  declarations: [
    DictEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DictEditComponent,
  ]
})
export class SharedModule { }
