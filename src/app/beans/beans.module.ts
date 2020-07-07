import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsModule } from '../elements/elements.module';
import { BeansRoutingModule } from './beans-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    BeansRoutingModule,
    ElementsModule
  ]
})
export class BeansModule { }
