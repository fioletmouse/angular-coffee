import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'el-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text = 'Button';
  @Input() color = 'primary';
  @Input() tabIndex = 1;
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  actionCall() {
    this.action.emit();
  }
}
