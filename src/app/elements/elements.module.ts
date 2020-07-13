import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CardComponent } from './card/card.component';
import { MainTableComponent } from './main-table/main-table.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TableIconsCellComponent } from './table-icons-cell/table-icons-cell.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    CardComponent,
    MainTableComponent,
    TableIconsCellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    AgGridModule.withComponents(),
  ],
  exports: [
    NavMenuComponent,
    CardComponent,
    MainTableComponent,
  ]
})
export class ElementsModule { }
