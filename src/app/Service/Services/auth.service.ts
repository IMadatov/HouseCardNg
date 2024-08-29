import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserInfo } from '../../Models/user-info';
import { LoginModel } from '../../Models/login-model';
import { Router } from '@angular/router';
import { User } from '../../Models/user';
import {
  HttpResponse,
  HttpResponseBase,
  HttpStatusCode,
} from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated: boolean = false;
  public userInfo: UserInfo | undefined;
  public shortNF: string | undefined;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  checkLogin() {
    this.httpService.getAuthUser().subscribe({
      next: (resp: UserInfo) => {
        this.userInfo = resp;

        this.shortNF =
          this.userInfo.userName.charAt(0).toUpperCase() +
          this.userInfo.userLastName.charAt(0).toUpperCase();

        // console.log(this.userInfo)
        // console.log("------------------------------");

        // console.log(this.authenticated)
        this.authenticated = true;

        // console.log(this.authenticated)
        // console.log("------------------------------");
      },
      error: (err) => {
        console.log('u should sign in');
        console.error(err);
      },
    });
  }

  logIn(loginModel: LoginModel) {
    // console.log(loginModel);

    this.httpService.postAuthLogIn(loginModel).subscribe({
      next: (resp: boolean) => {
        this.authenticated = resp;
        this.router.navigateByUrl('/')
      },
      error: (err: HttpResponseBase) => {
        if (err.status == HttpStatusCode.Unauthorized) {
          this.toastr.error('Email or password is incorrect');
        }
        console.log(err);
      },
    });
  }

  logOut() {
    this.httpService.postAuthLogOut().subscribe({
      next: (resp) => {
        this.authenticated = false;
        this.userInfo = undefined;
        this.router.navigateByUrl('/');
      },
      error: (err) => console.error(err),
    });
  }

  signUp(user: User) {
    this.httpService.postAuthSignUp(user).subscribe({
      next: () => {
        this.router.navigateByUrl('/signin')
        this.toastr.info("Registered");

        //it should be verify email.but it there no
      },
      error: (err: HttpResponseBase) => {
        if (err.status == HttpStatusCode.BadRequest) {
          this.toastr.error('This email has been registered');
        } else console.error(err);
      },
    });
  }
}
