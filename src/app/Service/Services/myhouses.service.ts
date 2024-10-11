import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Housinglocation } from '../../Models/housinglocation';
import { ToastrService } from 'ngx-toastr';
import { UserInfo } from '../../Models/user-info';
import { UserCard } from '../../Models/user-card';

@Injectable({
  providedIn: 'root',
})
export class MyhousesService {
  public listMyHouses: Housinglocation[] | undefined;

  constructor(
    private httpSerivce: HttpService,
    private toastr: ToastrService
  ) {}

  getHouses() {
    this.httpSerivce.getMyHouses().subscribe({
      next: (respon: Housinglocation[] | undefined) => {
        this.listMyHouses = respon;

        this.listMyHouses!.push({
          forAdd: true,
        } as Housinglocation);

        // console.log(this.listMyHouses);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  deleteHome(id: number) {
    this.httpSerivce.deleteHouse(id).subscribe({
      next: () => {
        const index: number = this.listMyHouses?.findIndex(
          (x) => x.houseId == id
        )!;
        if (index !== -1) this.listMyHouses?.splice(index, 1);
        
        this.toastr.info('Deleted');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  selectedFromCardList: UserCard[] | undefined;

  getInCardsMyHouse() {
    this.httpSerivce.getInCardsMyHouse().subscribe({
      next: (response: UserCard[]) => {
        this.selectedFromCardList = response;
        this.getHouses();
        console.log(this.selectedFromCardList);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
