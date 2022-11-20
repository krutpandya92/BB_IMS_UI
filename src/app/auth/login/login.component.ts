import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
    localStorage.setItem('BB_IMS_LOGGED_IN', 'true');
    localStorage.setItem('BB_IMS_LOGIN_TOKEN', 'If8#77v$v&8*hg');
    if (localStorage.getItem('BB_IMS_LOGGED_IN') && localStorage.getItem('BB_IMS_LOGIN_TOKEN')) {
      this.router.navigate(['/dashboard/policy']);
    } else { }
  }

}
