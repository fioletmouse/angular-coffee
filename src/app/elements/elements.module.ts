import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CardComponent } from './card/card.component';
import { DictTableComponent } from './dict-table/dict-table.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainTableComponent } from './main-table/main-table.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    DictTableComponent,
    CardComponent,
    MainListComponent,
    MainTableComponent,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    AgGridModule.withComponents(),
  ],
  exports: [
    NavMenuComponent,
    DictTableComponent,
    CardComponent,
    MainListComponent,
    MainTableComponent,
  ]
})
export class ElementsModule { }
