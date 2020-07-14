import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'el-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() addAction = false;
  @Output() addHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addHandler.emit();
  }
}
