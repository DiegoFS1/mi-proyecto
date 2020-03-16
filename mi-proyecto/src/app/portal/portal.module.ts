import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalContentComponent } from './portal-content/portal-content.component';
import { NavigationComponent } from './portal-content/navigation/navigation.component';
import { InicioComponent } from './portal-content/inicio/inicio.component';


@NgModule({
  declarations: [PortalContentComponent, NavigationComponent, InicioComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
