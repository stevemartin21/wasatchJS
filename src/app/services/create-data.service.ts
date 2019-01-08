import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateDataService {

  constructor(private http: HttpClient, private router: Router) { }

  createUser (name: string, email: string, password: string) {
    const newUser: User = {
      name: name,
      email: email,
      password: password
    };

    console.log(newUser);
  }

  createToken(email: string, password: string) {
    const newToken = {
      email: email,
      password: password
    };
    console.log(newToken);
  }
}
