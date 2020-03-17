import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  isFormSubmitted = false;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private auth: AuthService) 
    {
      if(this.auth.currentUserValue !== null) {
        this.router.navigate(['/app'])
      }
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      agree: [false, Validators.required]
    });
  }
  get f(){ return this.form.controls;} 


  onSubmit() {
    this.isFormSubmitted = true;
    if(this.form.invalid || !this.f.agree.value) {
      return;
    }
    this.auth.signUp(this.form.value).subscribe((res: any)=> {
      console.log(res)
      if(+res.status === 200) {
        this.router.navigate(['login']);
      }
    })

  }
}
