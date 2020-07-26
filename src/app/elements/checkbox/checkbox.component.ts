import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'el-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label = 'Field Name';
  @Input() control: FormControl;
  @Input() tabIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
