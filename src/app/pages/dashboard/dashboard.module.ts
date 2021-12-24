import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';

@NgModule({
  imports: [CommonModule, DashBoardRoutingModule],
  declarations: [DashboardComponent, DashboardCardsComponent],
  providers: [],
})
export class DashBoardModule {}
