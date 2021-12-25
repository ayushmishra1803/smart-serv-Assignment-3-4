import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordCheck } from 'src/app/validator/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  logoUrl:string="https://drive.google.com/file/d/1aJc3BFBScf8Du0-pWERrhebI4xPlaQEd/view?usp=sharing"
  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(res=>{
      console.log(this.loginForm);
      
    })
  }
  onSubmit() {
    //! for testing alert('login');
    this.router.navigate(['/dashboard']);
   
  }
}
