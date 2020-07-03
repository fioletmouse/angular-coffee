import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrewTypeComponent } from './brew-type/brew-type.component';

export const routes: Routes = [{
    path: '',
    component: BrewTypeComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DictRoutingModule { }
  