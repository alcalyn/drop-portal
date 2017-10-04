import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PortalComponent } from './portal.component';
import { TwitterComponent } from './twitter.component';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  imports: [SharedModule, PortalRoutingModule],
  declarations: [
    PortalComponent,
    TwitterComponent
  ]
})
export class PortalModule { }
