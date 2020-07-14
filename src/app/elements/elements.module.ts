import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { MainTableComponent } from './main-table/main-table.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TableIconsCellComponent } from './table-icons-cell/table-icons-cell.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    CardComponent,
    MainTableComponent,
    TableIconsCellComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    SharedModule
  ],
  exports: [
    NavMenuComponent,
    CardComponent,
    MainTableComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
  ]
})
export class ElementsModule { }
