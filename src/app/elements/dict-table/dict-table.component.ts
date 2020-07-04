import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DictTableDataSource, DictTableItem } from './dict-table-datasource';

@Component({
  selector: 'el-dict-table',
  templateUrl: './dict-table.component.html',
  styleUrls: ['./dict-table.component.css']
})
export class DictTableComponent implements AfterViewInit, OnInit {
  @Input() data$: Observable<DictTableItem[]>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DictTableItem>;
  dataSource: DictTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit(): void {
    this.dataSource = new DictTableDataSource();

    this.data$.subscribe( data => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
