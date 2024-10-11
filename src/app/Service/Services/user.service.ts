import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserInfo } from '../../Models/user-info';
import { User } from '../../Models/user';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService {
  public userInfo:UserInfo|undefined
  constructor(private httpService:HttpService,private toastr:ToastrService) { }
  
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
  changePassword(newPsw:string,oldPsw:string){
    this.httpService.changePassword(newPsw,oldPsw).subscribe({
      next:resp=>{
        if(resp){
          this.toastr.info("Changed password");
        }
      }
    })
  }
}
