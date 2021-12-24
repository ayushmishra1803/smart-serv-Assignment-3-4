import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, DashBoardRoutingModule],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashBoardModule {}
