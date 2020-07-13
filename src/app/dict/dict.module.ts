import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsModule } from '../elements/elements.module';
import { SharedModule } from './../shared/shared.module';
import { BrewTypeComponent } from './brew-type/brew-type.component';
import { CountryComponent } from './country/country.component';
import { DictRoutingModule } from './dict-routing.module';
import { ProcessingComponent } from './processing/processing.component';

@NgModule({
  declarations: [BrewTypeComponent, ProcessingComponent, CountryComponent],
  imports: [
    CommonModule,
    DictRoutingModule,
    ElementsModule,
    SharedModule,
  ]
})
export class DictModule { }
