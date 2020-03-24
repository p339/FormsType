import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../admin/mustmatch.validator';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  todaydate = new Date();

  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }



  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.router.navigate(['/login']);
      console.log('......', this.registerForm.value);
    }


    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}