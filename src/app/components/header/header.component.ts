import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileHeaderclose: boolean = true;

  constructor() { }

  toggleMobileMenu() {
    this.mobileHeaderclose = !this.mobileHeaderclose;
  }

  ngOnInit(): void {
  }

}
