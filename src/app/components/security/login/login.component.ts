import { Component, OnInit, Input} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = '';
  password = '';
  invalidLogin = false;

  @Input() error: string | null | undefined;

  constructor(private router: Router,
              private loginservice: LoginService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    this.error=null;
    (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
          this.error = error.message;

        }
      )
    );

  }



}
