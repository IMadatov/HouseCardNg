import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Housinglocation } from '../../Models/housinglocation';
import { ToastrService } from 'ngx-toastr';
import { UserInfo } from '../../Models/user-info';

@Injectable({
  providedIn: 'root',
})
export class MyhousesService {
  public listMyHouses: Housinglocation[] | undefined;
  constructor(private httpSerivce: HttpService,private toastr:ToastrService) {}

  getHouses() {
    this.httpSerivce.getMyHouses().subscribe({
      next: (respon: Housinglocation[] | undefined) => {
        this.listMyHouses = respon;

        this.listMyHouses!.push({
          isNew: true,
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
        const index: number = this.listMyHouses?.findIndex((x) => x.houseId == id)!;
        if (index !== -1) this.listMyHouses?.splice(index, 1);
        // location.reload
        this.toastr.info('Deleted');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  
}
