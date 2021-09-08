import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLoggedIn: string | null | undefined;

  constructor(private httpClient :HttpClient) { }

// Provide username and password for authentication, and once authentication is successfull,
//store JWT token in session

  authenticate(username: string | undefined, password: string | undefined) {
    return this.httpClient
      .post<any>("http://localhost:9000/authenticate", { username, password })
      .pipe(
        map(userData => {
          if (typeof username === "string") {
            sessionStorage.setItem("username", username);
          }
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }

  getUserLoggedIn(){
    this.userLoggedIn = sessionStorage.getItem("username");
    return this.userLoggedIn;
  }


  // login(username: string | undefined, password: string | undefined){
  //   console.log(username, password)
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.get("http://localhost:8083/login",{headers,responseType: 'text' as 'json'})
  // }


}
