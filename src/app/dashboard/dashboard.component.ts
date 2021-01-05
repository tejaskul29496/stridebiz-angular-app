import { Component, OnInit } from '@angular/core';
import { pieUsers } from './data';
import { barUsers } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieUsers: any[];
  barUsers: any[];
  view: any[] = [];

  showXAxis = true;
  showYAxis = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';
  showXAxisLabel = true;
  xAxisLabel = 'Score';
  showYAxisLabel = true;
  yAxisLabel = 'Users';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { pieUsers });
    Object.assign(this, { barUsers });
  }

  ngOnInit(): void {
  }

}
