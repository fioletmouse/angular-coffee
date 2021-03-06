import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface CellParam {
  handler: (id: number) => void;
  icon: string;
  tooltip: string;
  conditionValue: number;
  conditionParam: string;
}

export interface IconCellParams extends ICellRendererParams {
  buttons: CellParam[];
}

@Component({
  templateUrl: './table-icons-cell.component.html',
  styleUrls: ['./table-icons-cell.component.css']
})
export class TableIconsCellComponent implements ICellRendererAngularComp {
  id: number;
  buttons: CellParam[];

  constructor() { }

  agInit(params: IconCellParams): void {
    this.buttons = params.buttons;
    this.id = params.data.id;
    this.buttons = this.buttons.filter( btn => {
      if (btn.conditionParam) {
       return params.data[btn.conditionParam] === btn.conditionValue;
      }
      return true;
    });
  }

  onClick(e: Event, handler) {
    e.preventDefault();
    e.stopPropagation();
    handler(this.id);
  }

  refresh(params: any): boolean {
    return false;
  }
}
