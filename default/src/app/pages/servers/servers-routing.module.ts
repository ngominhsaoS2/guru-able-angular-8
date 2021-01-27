import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './servers.component';

const routes: Routes = [
  {
    path: '',
    component: ServersComponent,
    data: {
      breadcrumb: 'servers',
      icon: 'icofont icofont-server bg-c-pink',
      breadcrumb_caption: 'We can have all information about our servers here',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
