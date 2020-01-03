import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private  fb: FormBuilder, private authservice:AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email:['', [Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }
  async onSubmit(form) {
    console.log(form.value);
    const loginres = await this.authservice.loginuser(form.value);
    console.log(loginres);

  }
}
