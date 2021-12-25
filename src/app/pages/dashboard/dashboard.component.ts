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
  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    {
      data: [78000, 71000, 49000, 47000, 46000, 34000],
      label: 'Revenue by Location',
    },
  ];
  public jobTypeDataSet: Array<any> = [
    {
      data: [181000, 130000, 89000, 88000, 47000, 45000, 1000],
      label: 'Revenue by Job Type',
    },
  ];

  public chartLabels: Array<any> = [
    'Everett',
    'Seattle',
    'Lynnwood',
    'Bothell',
    'Mukiteo',
    'Edmonds',
  ];
  public jobTypeLables: Array<any> = [
    'Service Plumbing',
    'Big Wrok HVAC',
    'Service HVAC',
    'Bid Work Plumbing',
    'HWT Replacement',
    'Maintenance',
    'Material Sale',
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgb(65,191,153)',
      borderColor: 'rgb(65,191,153)',

      borderWidth: 0,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };
}
