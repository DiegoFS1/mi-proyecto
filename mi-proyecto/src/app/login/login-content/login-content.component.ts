import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})
export class LoginContentComponent implements OnInit {

  public user : User;

  public loginForm : FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  public login() : void{
    const { email, password } = this.loginForm.value;
    this.router.navigate(['/portal/inicio']);
  }
}
