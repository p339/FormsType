import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private authService: AuthService) { }
  submitted = false;
  todaydate = new Date();


  ngOnInit(
  ) { }



  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  onSubmit() {
    console.log(this.model);
    alert('SUCCESS!! :-)\n\n')
    this.router.navigate(['/panel']);
  }
  OnReset() {
    this.submitted = false;
    this.model.reset();

  }

}


