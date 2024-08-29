import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../Service/http.service';
import { User } from '../../Models/user';
import { AuthService } from '../../Service/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {

  /**
   *
   */
  constructor(private toestr:ToastrService,private router:Router,private authService:AuthService) {}

  submitSigUpForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.minLength(6), Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    passwordConfirm: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  submitSignUp() {
    if (
      this.submitSigUpForm.value.password ==
      this.submitSigUpForm.value.passwordConfirm
    ) {
      this.submitSigUpForm.valid;
      this.authService.signUp({
        Email:this.submitSigUpForm.value.email,
        Password:this.submitSigUpForm.value.password,
        UserLastName:this.submitSigUpForm.value.lastName,
        UserName:this.submitSigUpForm.value.firstName
      } as User);
      
    }else{
      // console.log(this.submitSigUpForm.value.password+' '+this.submitSigUpForm.value.passwordConfirm);
      this.toestr.warning("Password and confirm password doesn't eqal");
    }
  }
}
