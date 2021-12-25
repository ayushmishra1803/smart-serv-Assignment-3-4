import { Component, Input, OnInit } from '@angular/core';
import { CompanyMatric } from '../../interface/dashboard.interface';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
  @Input() companyItem: CompanyMatric = {};
  constructor() {}

  ngOnInit(): void {}
}
