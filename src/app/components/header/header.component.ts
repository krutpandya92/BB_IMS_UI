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
  settingDropdownClosed: boolean = true;
  notificationDropdownOpened: boolean = false;
  setitngDropdownOpened: boolean = false;
  profileDropdownOpened: boolean = false;

  constructor(private _eref: ElementRef) { }

  toggleMobileMenu() {
    this.mobileMenuClosed = !this.mobileMenuClosed
  }

  dropdownToggle(dropdownRef: any) {
    dropdownRef = !dropdownRef;
  }

  documentClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.notificationDropdownOpened = false;
      this.setitngDropdownOpened = false;
      this.profileDropdownOpened = false;
    }
  }

  ngOnInit(): void {
  }

}
