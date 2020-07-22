import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyOverviewComponent} from './company-overview/company-overview.component'
import { GadgetsComponent } from './gadgets/gadgets.component';




const routes: Routes = [
  {path:'gadgets', component: GadgetsComponent},
  {path:'', component: CompanyOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }