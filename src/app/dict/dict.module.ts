import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrewTypeComponent } from './brew-type/brew-type.component';
import { ProcessingComponent } from './processing/processing.component';
import { CountryComponent } from './country/country.component';
import { DictRoutingModule } from './dict-routing.module';

@NgModule({
  declarations: [BrewTypeComponent, ProcessingComponent, CountryComponent],
  imports: [
    CommonModule,
    DictRoutingModule,
  ]
})
export class DictModule { }
