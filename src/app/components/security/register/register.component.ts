import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName = '';
  lastName = '';
  email = '';
  password = '';

  isSuccessful = false;
  isSignUpFailed = false;
  @Input() error: string | null | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    this.error = null;

    this.authService.register(this.firstName, this.lastName, this.email, this.password).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';

      },
      err => {
        console.log(err)
        this.error = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
