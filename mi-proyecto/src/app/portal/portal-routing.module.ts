import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './portal-content/inicio/inicio.component';
import { PortalContentComponent } from './portal-content/portal-content.component';


const routes: Routes = [
  { path: 'portal', component: PortalContentComponent, children: [
                                                          {
                                                            path: 'inicio',
                                                            component: InicioComponent
                                                          }
                                                       ]   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
