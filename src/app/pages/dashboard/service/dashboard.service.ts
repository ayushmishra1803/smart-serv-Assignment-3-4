import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyMatric } from '../interface/dashboard.interface';

@Injectable()
export class DashboardService {
  constructor() {}
  getAllCompanyMatric(): Observable<CompanyMatric[]> {
    return of([
      {
        count: 406411.29,
        title: 'Total Revenue',
        color: 'primary',
        money: true,
      },
      {
        count: 620,
        title: 'Total Jobs Avg',
        color: 'regular',
        money: true,
      },
      {
        count: 655,
        title: 'Tickets Created',
        color: 'regular',
        money: false,
      },
      {
        count: 735,
        title: 'Tickets Scheduled',
        color: 'regular',
        money: false,
      },
      {
        count: 110448.8,
        title: 'Outstanding Amount',
        color: 'danger',
        money: true,
      },
      {
        count: 105,
        title: 'Membership Sold',
        color: 'regular',
        money: false,
      },
      {
        count: 436,
        title: 'Job Completed',
        color: 'regular',
        money: false,
      },
      {
        count: 65,
        title: 'Total Canceled',
        color: 'regular',
        money: false,
      },
    ]);
  }
}
