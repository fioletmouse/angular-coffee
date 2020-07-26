import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'el-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label = 'Field Name';
  @Input() control: FormControl;
  @Input() required = false;
  @Input() tabIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
