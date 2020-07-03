import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'beans',
    pathMatch: 'full',
  }, {
    path: 'beans',
    loadChildren: () => import('./beans/beans.module').then(m => m.BeansModule),
  }, {
    path: 'admin',
    loadChildren: () => import('./dict/dict.module').then(m => m.DictModule),
  }, {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
