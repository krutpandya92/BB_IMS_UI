import { Component, OnInit } from '@angular/core';
import data from './../../config/data.json';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  providerArray: any;
  constructor() { }

  ngOnInit(): void {
  }

  barGraph: any = {
    results: [
      {
        name: "Policy 1",
        value: 2050
      },
      {
        name: "Policy 2",
        value: 2032
      },
      {
        name: "Policy 3",
        value: 2025
      },
      {
        name: "Policy 4",
        value: 2040
      },
      {
        name: "Policy 5",
        value: 2044
      }
    ],
    view: [400, 400],
    xAxis: true,
    yAxis: true,
    yScaleMax: 2060,
    yScaleMin: 2000,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: "Policies",
    yAxisLabel: "Date",
    legend: true,
    legendTitle: 'Policies',
    legendPosition: 'below',
    roundEdges: false,
    barPadding: 35,
    gradient: false,
  }

  providerPieChartGraph: any = {
    results: [
      {
        "name": data?.providerName,
        "value": 30
      },
      {
        "name": "Policy Bazar",
        "value": 20
      },
      {
        "name": "Tata",
        "value": 40
      },
      {
        "name": "New India",
        "value": 10
      }
    ],
    view: [400, 400],
    gradient: false,
    legend: true,
    labels: true,
    doughnut: false,
    legendPosition: 'below',
    legendTitle: 'Providers',
  }

  categoryPieChartGraph: any = {
    results: [
      {
        "name": "Life Insurance",
        "value": 30
      },
      {
        "name": "Health Insurance",
        "value": 25
      },
      {
        "name": "Auto Mobile Insurance",
        "value": 15
      },
      {
        "name": "Term Plan",
        "value": 30
      }
    ],
    view: [400, 400],
    gradient: false,
    legend: true,
    labels: true,
    doughnut: false,
    legendPosition: 'below',
    legendTitle: 'Categories',
  }
}
