import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdolsComponent } from '../dashboard/idols/idols.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/idols/redvelvet',
    pathMatch: 'full',
  },
  {
    path: 'idols/:group',
    component: IdolsComponent,
  },
  {
    path: '**',
    redirectTo: '/redvelvet',
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class RoutingModule { }
