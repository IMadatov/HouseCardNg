import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/Services/auth.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Service/Services/user.service';
import { HttpService } from '../../Service/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  enterPassword: boolean = true;

  userForm = new FormGroup(
    {
      oldPassword: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ]),
      newPassword: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ]),
      confirmPassword: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ])
      ),
    },
    { validators: [this.checkPasswordEqaul()] }
  );

  constructor(
    public serviceAuth: AuthService,
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.serviceAuth.checkLogin();
  }

  checkPasswordEntered() {
    if (this.userForm.controls.oldPassword.value?.toString() != '') {
      this.enterPassword = true;
    }
    this.enterPassword = false;
  }

  checkPasswordEqaul(): ValidatorFn {
    return (controls: AbstractControl): ValidationErrors | null => {
      if (controls.value.newPassword == controls.value.confirmPassword)
        return null;

      return { equalBothPasswordsError: true };
    };
  }
  changePassword() {
    this.httpService
      .changePassword(
        this.userForm.controls.newPassword.value?.toString()!,
        this.userForm.controls.oldPassword.value?.toString()!
      )
      .subscribe({
        next: (resp) => {
          if (resp) {
            this.toastr.info('Changed password');
            this.userForm.reset();
          }
        },
      });
  }
}
