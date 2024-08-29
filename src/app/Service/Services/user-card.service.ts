import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Housinglocation } from '../../Models/housinglocation';
import { ImageService } from './image.service';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import { UserCard } from '../../Models/user-card';
import { User } from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {
  housingLocation: Housinglocation | undefined;
  imageUrl: string | ArrayBuffer;
  public allCards:UserCard[]|undefined;

  constructor(
    private httpService: HttpService,
    private toastr:ToastrService,
    private houseService:HomeService
  ) {
    this.imageUrl = '';
  }

  getHouse(id: number): void {
    this.httpService.getByIdHouse(id).subscribe({
      next: (resp) => {
        this.housingLocation = resp;

        this.httpService.getImageById(this.housingLocation.photoId).subscribe({
          next:(resp2:Blob)=>{
            this.imageUrl=URL.createObjectURL(resp2);
            // console.log(this.imageUrl)
          },
          error:(err:any)=>{
            console.error(err);
            
          }
         });
        
        // console.log(this.housingLocation);
        // console.log('imageUrl ----');

        // console.log(this.imageUrl);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  addCard(id:number){
    this.httpService.postUserCard(id).subscribe({
      next:()=>{
        this.toastr.info("Added to card")
        let index=this.houseService.listHome?.findIndex(x=>x.houseId==id);
        this.houseService.listHome?.splice(index!,1);
        this.houseService.filterHousingLocationList=this.houseService.listHome
        console.log((this.houseService.filterHousingLocationList));
        
      },
      error:err=>{
        console.error(err);
        
      }
    })
  }

  deleteCard(id:number){
    this.httpService.deleteUserCard(id!).subscribe({
      next:(resp:any)=>{
        let index=this.allCards?.findIndex(x=>x.id==id);
        this.allCards?.splice(index!,1);
        console.log(resp);
        
        console.log(this.allCards);
        
        this.toastr.info('Refused')
      },
      error:err=>{
        console.error(err);
        
      }
    })
  }

  getAllCards(){
    this.httpService.getUserCards().subscribe({
      next:(rep:UserCard[])=>{
        this.allCards=rep
        console.log(this.allCards);
      },
      error:err=>{
        console.error(err);
        
      }
    })
  }
}
