import { Injectable } from '@angular/core';
import { Housinglocation } from '../../Models/housinglocation';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { ImageService } from './image.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  listHome: Housinglocation[] | undefined;
  filterHousingLocationList: Housinglocation[] | undefined;
  home: Housinglocation | undefined;
  constructor(
    private service: HttpService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  getHomes() {
    this.service.getAllHouses().subscribe({
      next: (respo:Housinglocation[]) => {
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
        (x.city!+x.state+x.houseName).toUpperCase().includes(text.toUpperCase())
      );
      return;
    }
    this.filterHousingLocationList = this.listHome;
  }
  addCard(id: number) {
    this.service.postUserCard(id).subscribe({
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
          if (err.error == 'This house is your, u cannot add to card') {
            this.toastr.info(err.error);
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
