import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Service/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  /**
   *
   */
  constructor(public serviceAuth: AuthService,private router : Router) {}

  submitSignInForm = new FormGroup({
    email: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
    ]),
    
  });

  submitSignIn() {
    
    this.serviceAuth.logIn({
      Email: this.submitSignInForm.value.email!,
      Password: this.submitSignInForm.value.password!,
    });
  }
}
