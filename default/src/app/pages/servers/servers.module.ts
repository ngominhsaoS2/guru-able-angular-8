import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ServersRoutingModule,
    SharedModule
  ],
  declarations: [ServersComponent]
})
export class ServersModule { }