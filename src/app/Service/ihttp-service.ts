import { Observable } from 'rxjs';
import { Housinglocation } from '../Models/housinglocation';
import { User } from '../Models/user';
import { UserInfo } from '../Models/user-info';
import { UserCard } from '../Models/user-card';
import { LoginModel } from '../Models/login-model';

export interface IHttpService {
  urlHome: string; //https://localhost:7131/api/Home/GetAllHouses
  urlImage: string;
  urlUser: string;
  urlAuth: string;
  urlUserCard: string;

  //url /api/Auth controller

  postAuthLogIn(loginModel: LoginModel): Observable<boolean>;

  postAuthLogOut(): any;

  postAuthSignUp(user: User): Observable<boolean>;

  getAuthUser(): Observable<UserInfo>;

  //url /api/Home controller

  getAllHouses(): Observable<Housinglocation[]>;

  getByIdHouse(id: number): Observable<Housinglocation>;

  postHouse(house: Housinglocation): Observable<Housinglocation>;

  updateHouse(house: Housinglocation): Observable<Housinglocation>;

  deleteHouse(id: number): any;

  //Image**********************************************************************************

  postImage(blob: Blob, fileName: string): any;

  deleteImage(id: number): void;

  getImageById(id: number | undefined): Observable<Blob>;

  //User ************************************************************************************

  getAllUsers(): Observable<User[]>;

  getUser(id: number): Observable<UserInfo>;

  updateUser(user: User): Observable<User>;

  deleteUser(id: number): Observable<any>;

  //User Cards***************************************************************************************

  getUserCards(): Observable<UserCard[]>;

  getUserCard(id:number): Observable<UserCard>;

  postUserCard(id: number): Observable<boolean>;

  deleteUserCard(id: number): Observable<string>;
}
