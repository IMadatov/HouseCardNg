import { Injectable } from '@angular/core';
import { Housinglocation } from '../../Models/housinglocation';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { ImageService } from './image.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserInfo } from '../../Models/user-info';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  listHome: Housinglocation[] | undefined;

  userInfoList: UserInfo[] | undefined;
  userInfoFilter: UserInfo[] | undefined;

  filterHousingLocationList: Housinglocation[] | undefined;

  home: Housinglocation | undefined;
  constructor(
    private httpservice: HttpService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  getUserById(id: number) {
    return this.userInfoList?.find((x) => x.userId == id);
  }
  getUserInfoAll() {
    this.httpservice.getAllUsers().subscribe({
      next: (resp: UserInfo[]) => {
        this.userInfoList = resp;
        this.userInfoFilter = this.userInfoList;
        this.getHomes();
      },
      error: (err) => console.error(err),
    });
  }

  getHomes() {
    this.httpservice.getAllHouses().subscribe({
      next: (respo: Housinglocation[]) => {
        this.listHome = respo;
        this.filterHousingLocationList = this.listHome;
        console.log(this.filterHousingLocationList);
      },

      error: (err) => console.error(err),
    });
  }
  filterResult(text: string) {
    if (text) {
      this.filterHousingLocationList = this.listHome?.filter((x) =>
        (x.city! + x.state + x.houseName)
          .toUpperCase()
          .includes(text.toUpperCase())
      );
      return;
    }
    this.filterHousingLocationList = this.listHome;
  }
  addCard(id: number) {
    this.httpservice.postUserCard(id).subscribe({
      next: () => {
        this.toastr.info('Added to card');
        let index = this.listHome?.findIndex((x) => x.houseId == id);
        this.listHome?.splice(index!, 1);
        this.filterHousingLocationList = this.listHome;
        console.log('-----------------');

        console.log(this.filterHousingLocationList);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == HttpStatusCode.BadRequest) {
          if (err.error == 'This house is yours, u cannot add to card') {
            this.toastr.info(err.error);
          }
          if (err.error == 'This card has in DB') {
            this.toastr.info("Check /MyCards")
          }
        }
        if (err.status == HttpStatusCode.Unauthorized) {
          this.router.navigateByUrl('/signin');
        }

        console.error(err);
      },
    });
  }
}
