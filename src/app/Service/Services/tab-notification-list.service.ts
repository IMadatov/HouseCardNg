import { Injectable, Input } from '@angular/core';
import { UserInfo } from '../../Models/user-info';
import { Housinglocation } from '../../Models/housinglocation';
import { HttpService } from '../http.service';
import { User } from '../../Models/user';
import { UserCard } from '../../Models/user-card';
import { HouseListComponent } from '../../Pages/house-list/house-list.component';
import { ToastrService } from 'ngx-toastr';
import { Status } from '../../Models/status';

@Injectable()
export class TabNotificationListService {
  
  user:UserInfo|undefined;
  card:Housinglocation|undefined;
  imageUrl:string|ArrayBuffer='';

  constructor(private httpService:HttpService,private toastr:ToastrService) { }

  getUser(id:number){
    
    this.httpService.getUser(id).subscribe({
      next:(resp:UserInfo)=>{
        this.user=resp;
      }
    })
  }

  getCard(id:number){
    this.httpService.getHouse(id).subscribe({
      next:(resp:Housinglocation)=>{
        this.card=resp;
        this.getImage();
      }
    })
  }
  getImage(){
    this.httpService.getImageById(this.card?.photoId).subscribe({
      next:resp=>{
        this.imageUrl=URL.createObjectURL(resp);
      } 
    })
  }
  soldCard(cardId:number){
    this.card!.status=Status.Sold
    console.log(this.card);
    
    this.httpService.updateHouse(this.card!).subscribe({
      next:resp=>{
        this.card=resp;
        this.httpService.acceptCard(cardId).subscribe({
          next:resp2=>{
            if(resp2==true){
              this.toastr.success("Accepted!");
            }
          }
        })
      },
      error:err=>console.error(err)
      
    });
  }
}
