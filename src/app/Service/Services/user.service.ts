import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserInfo } from '../../Models/user-info';

@Injectable()
export class UserService {
  public userInfo:UserInfo|undefined
  constructor(private httpService:HttpService) { }
  
  getUserByID(id:number){
    this.httpService.getUser(id).subscribe({
      next:(res:UserInfo)=>{
        this.userInfo=res;
      },
      error:err=>{
        console.error(err);
        
      }
    })
  }
}
