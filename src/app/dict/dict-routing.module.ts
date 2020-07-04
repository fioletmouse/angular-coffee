import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrewTypeComponent } from './brew-type/brew-type.component';
import { CountryComponent } from './country/country.component';
import { ProcessingComponent } from './processing/processing.component';

export const routes: Routes = [{
    path: '',
    component: BrewTypeComponent,
}, {
    path: 'brew-type',
    component: BrewTypeComponent,
}, {
    path: 'processing',
    component: ProcessingComponent,
}, {
    path: 'country',
    component: CountryComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DictRoutingModule { }
  