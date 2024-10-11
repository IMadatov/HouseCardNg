import { Component, inject, Input, input, OnInit } from '@angular/core';
import { UserService } from '../../../Service/Services/user.service';
import { HomeService } from '../../../Service/Services/home.service';
import { ImageService } from '../../../Service/Services/image.service';
import { UserCardService } from '../../../Service/Services/user-card.service';
import { UserCard } from '../../../Models/user-card';
import { Router } from '@angular/router';
import { MycardlistService } from '../../../Service/Services/mycardlist.service';
import { MycardsService } from '../../../Service/Services/mycards.service';

@Component({
  selector: 'app-my-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './my-cards-list.component.html',
  styleUrl: './my-cards-list.component.css',
  providers:[ImageService,HomeService,UserService,MycardlistService]
})
export class MyCardsListComponent implements OnInit{
  @Input() card:UserCard|undefined;
  
  myCardsService=inject(MycardsService)

  /**
   *
   */
  constructor(
    public mycardListService:MycardlistService,
    private router:Router
  ) {}
  
  ngOnInit(): void {
    this.mycardListService.getInfo(this.card?.houseId!);
    
  }

  cencelCard(id:number){
    this.myCardsService.deleteCard(id);
  }

  navigateDetailUrl(id:number){
    this.router.navigateByUrl('/detail/'+id)
  }
}
