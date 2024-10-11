import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserInfo } from '../../Models/user-info';
import { Housinglocation } from '../../Models/housinglocation';

@Injectable()
export class MycardlistService {
  public userInfo: UserInfo | undefined;
  public houseInfo: Housinglocation | undefined;
  public imageUrl: string | ArrayBuffer = '';

  constructor(private httpService: HttpService) {}

  getInfo(id: number) {
    this.httpService.getByIdHouse(id).subscribe({
      next: (resp: Housinglocation) => {
        this.houseInfo = resp;
        this.httpService.getImageById(this.houseInfo.photoId).subscribe({
          next: (resp: Blob) => {
            this.imageUrl = URL.createObjectURL(resp);
          },
          error: (err) => console.error(err),
        });
        this.httpService.getUser(this.houseInfo.createdUserId).subscribe({
          next:(resp:UserInfo)=>{
            this.userInfo=resp;
          },
          error:err=>console.error(err)
          
        })
      },
    });
  } 
}
