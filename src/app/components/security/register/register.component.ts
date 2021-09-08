import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    firstName= '';
    lastName= '';
    email= '';
    password= '';

  isSuccessful = false;
  isSignUpFailed = false;
  @Input() error: string | null | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.error=null;

    this.authService.register(this.firstName, this.lastName,  this.email, this.password).subscribe(
      data => {
        console.log(this.firstName, this.lastName,  this.email, this.password);
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(this.firstName, this.lastName,  this.email, this.password);
        console.log(err)
        this.error = err.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
