import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'el-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {
  @Input() color = 'primary';
  @Input() type = 'menu';
  @Output() buttonHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handler() {
    this.buttonHandler.emit();
  }

}
