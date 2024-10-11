import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserCard } from '../../Models/user-card';

@Injectable({
  providedIn:'root'
})
export class TabNotificationService {

  public allCards:UserCard[]|undefined;
  public filterCards:UserCard[]|undefined;

  public countNew:number=0;
  constructor(private httpService:HttpService) { }

  getAllOfferUsers(){
    this.httpService.getInCardsMyHouse().subscribe({
      next:(resp:UserCard[])=>{
        this.allCards=resp;
        this.filterCards=this.allCards
        this.countNews();
        // console.log(resp);
      }
    })
  }
  countNews(){
    this.allCards?.forEach(x=>{
      if(x.isNew==true){
        this.countNew=this.countNew+(+1);

      }

    })
  }

  oldCard(){
    this.allCards?.forEach(x=>x.isNew=false);
    this.httpService.oldCard(this.allCards!).subscribe({
      next:resp=>{
        this.countNew=0;
      },
      error:err=>console.error(err)
      
    });

  }
}
