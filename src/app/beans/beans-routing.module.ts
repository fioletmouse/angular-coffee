import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [{
    path: '',
    component: ListComponent,
},{
    path: ':id',
    component: DetailsComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BeansRoutingModule { }
  