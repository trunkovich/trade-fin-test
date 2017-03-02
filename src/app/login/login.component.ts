import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Credentials, AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(data) {
    let credentials: Credentials = {
      email: data.email,
      password: data.password
    };

    this.authService.login(data)
      .subscribe(() => {
        console.log('authorised');
      });
  }

}
