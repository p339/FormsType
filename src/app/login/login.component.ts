import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  login() {

    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    console.log(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

  // login() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     this.isSubmitted = true;
  //     this.authService.login(this.loginForm.value);
  //     alert('Login Successfully!! :-)\n\n');
  //     this.router.navigateByUrl('/admin');
  //   }
  //   else {
  //     return;
  //   }
  // }

}



