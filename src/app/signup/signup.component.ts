import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted: boolean;
  SigninForm: FormGroup; 
  constructor(private authservice:AuthService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.SigninForm = this.fb.group({
      fname: ['',Validators.required],
      lname: ['', Validators.required],
      Email:['', [Validators.required,Validators.email]]
    })
  }

  get f() {
    return this.SigninForm.controls;
  }

    async onSubmit(form) {
    this.submitted = true;
    console.log(this.SigninForm.value);
     let status: any
     status = await this.authservice.Enrolldetails(this.SigninForm.value);
     console.log(status);
    if(status) {
      this.router.navigate(['/login']);

    }

    
  }

}
