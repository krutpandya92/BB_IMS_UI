import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() { }

  title = 'dashboard';

  search(event: string) {
    console.log(event);
  }

  ngOnInit(): void { }
}
