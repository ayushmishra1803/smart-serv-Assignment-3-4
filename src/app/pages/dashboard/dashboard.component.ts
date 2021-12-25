import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyMatric } from './interface/dashboard.interface';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  company_matrics$: Observable<CompanyMatric[]> = new Observable();

  ngOnInit(): void {
    this.company_matrics$ = this.dashboardService.getAllCompanyMatric();
  }
}
