import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient :HttpClient) { }

  register(firstName: string, lastName: string, email: string, password: string) {
    return this.httpClient
      .post<any>("http://localhost:8080/api/v1/registration",
      { firstName, lastName, email, password })
      .pipe(
        map(responseData =>{
        return responseData;})
      );
  }
}
