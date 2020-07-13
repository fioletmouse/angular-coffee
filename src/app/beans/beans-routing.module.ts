import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResolver } from './../services/detail-resolver.service';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [{
    path: '',
    component: ListComponent,
}, {
    path: ':id',
    component: DetailsComponent,
    resolve: { info: DetailResolver }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BeansRoutingModule { }
