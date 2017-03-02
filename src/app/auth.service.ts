import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  constructor() { }

  login(data: Credentials): Observable<any> {
    return Observable.of(true).delay(200);
  }

}
