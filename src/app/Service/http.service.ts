import {
  HttpClient,
  HttpHandler,
  HttpHeaders,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Housinglocation } from '../Models/housinglocation';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { User } from '../Models/user';
import { IHttpService } from './ihttp-service';
import { UserCard } from '../Models/user-card';
import { UserInfo } from '../Models/user-info';
import { LoginModel } from '../Models/login-model';
@Injectable({
  providedIn: 'root',
})
export class HttpService implements IHttpService {
  urlAuth = 'http://localhost:5049/api/auth/';
  urlHome = 'http://localhost:5049/api/Home/';
  urlImage = 'http://localhost:5049/api/Image/';
  urlUser = 'http://localhost:5049/api/User/';
  urlUserCard = 'http://localhost:5049/api/UserCard/';

  constructor(private http: HttpClient) {}

  //Auth controller ---------------------------------------------------------
  postAuthLogIn(loginModel: LoginModel): Observable<boolean> {
    return this.http.post<boolean>(this.urlAuth + 'Login', loginModel, {
      withCredentials: true,
    });
  }

  postAuthLogOut() {
    return this.http.post<boolean>(this.urlAuth + 'Logout', null, {
      withCredentials: true,
    });
  }

  postAuthSignUp(user: User): Observable<boolean> {
    // console.log(user);

    return this.http.post<boolean>(this.urlAuth + 'SignUp', user, {
      withCredentials: true,
    });
  }

  getAuthUser(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.urlAuth + 'GetUser', {
      withCredentials: true,
    });
  }

  //Home controller ---------------------------------------------------------
  getMyHouses(): Observable<Housinglocation[]> {
    return this.http.get<Housinglocation[]>(this.urlHome + 'GetMyHouses', {
      withCredentials: true,
    });
  }

  getHouse(id: number): Observable<Housinglocation> {
    return this.http.get<Housinglocation>(this.urlHome + 'GetByIdHouse/' + id, {
      withCredentials: true,
    });
  }

  getAllHouses() {
    return this.http.get<Housinglocation[]>(this.urlHome + 'GetAllHouses');
  }

  getByIdHouse(id: number): Observable<Housinglocation> {
    return this.http.get<Housinglocation>(this.urlHome + 'GetByIdHouse/' + id, {
      withCredentials: true,
    });
  }

  postHouse(house: Housinglocation): Observable<Housinglocation> {
    return this.http.post<Housinglocation>(this.urlHome + 'PostHouse', house, {
      withCredentials: true,
    });
  }

  updateHouse(house: Housinglocation): Observable<Housinglocation> {
    return this.http.put<Housinglocation>(this.urlHome + 'UpdateHouse', house, {
      withCredentials: true,
    });
  }

  deleteHouse(id: number) {
    return this.http.delete(this.urlHome + 'DeleteHouse/' + id, {
      withCredentials: true,
    });
  }

  //Image controller -------------------------------------------------------------
  postImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    // console.log(formData);
    return this.http.post(this.urlImage + 'PostImage', formData, {
      withCredentials: true,
    });
  }

  deleteImage(id: number) {
    return this.http.delete(this.urlImage + 'DeleteImage/' + id, {
      withCredentials: true,
    });
  }

  getImageById(id: number | undefined): Observable<Blob> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<Blob>(this.urlImage + 'GetImageById/' + id, {
      headers: header,
      responseType: 'blob' as 'json',
      withCredentials: true,
    });
  }

  //User controller ---------------------------------------------------------------
  getAllUsers(): Observable<User[]> {
    throw new Error('Method not implemented.');
  }

  getUser(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.urlUser + 'GetUser/' + id, {
      withCredentials: true,
    });
  }

  updateUser(user: User): Observable<User> | any {
    this.http.put<User>(this.urlUser + 'UpdateUser', user, {
      withCredentials: true,
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.urlUser + 'DeleteUser/' + id, {
      withCredentials: true,
    });
  }

  //User Card controller ----------------------------------------------

  getInCardsMyHouse(): Observable<UserCard[]> {
    return this.http.get<UserCard[]>(this.urlUserCard+'GetInCardsMyHouse',
    {
      withCredentials:true
    }
    );
  }
  getUserCards(): Observable<UserCard[]> {
    return this.http.get<UserCard[]>(this.urlUserCard + 'GetAllUserCards', {
      withCredentials: true,
    });
  }
  getUserCard(id: number): Observable<UserCard> {
    return this.http.get<UserCard>(this.urlUserCard + 'GetUserCard/' + id, {
      withCredentials: true,
    });
  }
  postUserCard(id: number): Observable<boolean> {
    return this.http.post<boolean>(
      this.urlUserCard + 'PostUserCard/' + id,
      {},
      { withCredentials: true }
    );
  }
  deleteUserCard(id: number) {
    return this.http.delete(this.urlUserCard + 'DeleteUserCard/' + id, {
      withCredentials: true,
      responseType: 'text',
    });
  }
}
