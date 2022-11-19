import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(document:click)': 'documentClick($event)',
  }
})
export class HeaderComponent implements OnInit {

  mobileMenuClosed: boolean = true;
  profileDropdownOpened: boolean = false;

  constructor(private _eref: ElementRef) { }

  toggleMobileMenu() {
    this.mobileMenuClosed = !this.mobileMenuClosed
  }

  profileDropdownToggle() {
    this.profileDropdownOpened = !this.profileDropdownOpened;
  }

  documentClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.profileDropdownOpened = false;
    }
  }

  ngOnInit(): void {
  }

}
