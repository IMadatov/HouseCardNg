import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Housinglocation } from '../../Models/housinglocation';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CreateHouseService {
  constructor(private httpService: HttpService,private toastr:ToastrService) {}

  createHouse(housing: Housinglocation, image: File) {
    // console.log('createHouse');
    
    this.httpService.postImage(image).subscribe({
      next: (resp: number | any) => {
        // console.log('--------------------------------');
        housing.photoId = resp;

        this.httpService.postHouse(housing).subscribe({
          next: (resp) => {
            // console.log(resp);
            this.toastr.info('Added')
          },
          error: (err) => {
            console.error(err);
          },
        });
      },
      error: (err) => console.error(err),
    });
  }
}

// {
//   "houseId": 0,
//   "houseName": "string",
//   "city": "string",
//   "state": "string",
//   "availableUnits": 0,
//   "wifi": true,
//   "loundry": true,
//   "createdUserId": 0,
//   "photoId": 0
// }
