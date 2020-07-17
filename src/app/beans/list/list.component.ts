import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TablesSettingsService } from 'src/app/services/tables-settings.service';
import { MainListItem } from '../../shared/models/beans.model';
import { TableIconsCellComponent } from './../../elements/table-icons-cell/table-icons-cell.component';
import { BeansService } from './../../services/beans.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = 'Coffee beans';
  data$: Observable<MainListItem[]>;
  gridOptions: GridOptions;

  constructor(
    private beansService: BeansService,
    private dictService: TablesSettingsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.data$ = this.beansService.getList();
    this.gridOptions =  this.dictService.mainListGridOptions;
    this.setSpecificGridSettings();
  }

  setSpecificGridSettings() {
    // get column with buttons. Can not be moved to service due to context lose
    const btnHeaderExist = this.gridOptions.columnDefs.some(x => x.headerName === '');
    if (!btnHeaderExist) {
      const btns = {
        headerName: '',
        sortable: true,
        flex: 5,
        cellRendererFramework: TableIconsCellComponent,
        cellRendererParams: {
          buttons: [
            {
              handler: (id: number) => {
                this.gotoDetails(id);
              },
              icon: 'preview',
            }, {
              handler:  (id: number) => {
                this.gotoDetails(id, true);
              },
              icon: 'create',
            }]
        }
      };

      this.gridOptions.columnDefs.push(btns);
    }
  }

  gotoDetails(id: number, isEdit = false) {
    this.router.navigate([`/beans/${id}`], { queryParams: { edit: isEdit } });
  }
}
