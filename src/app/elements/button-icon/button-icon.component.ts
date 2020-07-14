import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'el-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {
  @Output() addHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addHandler.emit();
  }

}
