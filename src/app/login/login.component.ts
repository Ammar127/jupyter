import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isFormSubmitted = false;
  serverMsg = '';
  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private auth: AuthService) {
      if(this.auth.currentUserValue !== null) {
        this.router.navigate(['/app'])
      }
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get f() {return this.form.controls;}
  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.form.value)
    if(this.form.invalid) {
      return;
    }
    this.auth.login(this.f.email.value, this.f.password.value).subscribe((res) => {
      if(+res.status === 200) {
        this.router.navigate(['/app']);
      } else {
        this.serverMsg = 'Email or Password is invalid';
      }
    });
  }
}
