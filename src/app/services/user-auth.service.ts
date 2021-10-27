import { User } from './../classes/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(private http: HttpClient) {}

  url = 'http://flash-cards-rest-api.herokuapp.com/api/';

  token = '1eef31a091e8582786d3ab68db0e7104d0ad2530';

  // create new user and pass the auth token on the header
  createUser(username: string, email: string, password: string) {
    return this.http.post(
      this.url + 'users/create/',
      {
        username: username,
        password: password,
        email: email,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token,
        },
      }
    );
  }
}
