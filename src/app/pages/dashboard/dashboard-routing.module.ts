import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashBoardRoutes: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [RouterModule.forChild(dashBoardRoutes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
