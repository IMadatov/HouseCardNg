import { Component, Input, input, OnInit } from '@angular/core';
import { UserService } from '../../../Service/Services/user.service';
import { HomeService } from '../../../Service/Services/home.service';
import { ImageService } from '../../../Service/Services/image.service';
import { UserCardService } from '../../../Service/Services/user-card.service';
import { UserCard } from '../../../Models/user-card';

@Component({
  selector: 'app-my-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './my-cards-list.component.html',
  styleUrl: './my-cards-list.component.css',
  providers:[ImageService]
})
export class MyCardsListComponent implements OnInit{
  @Input() card:UserCard|undefined
  

  /**
   *
   */
  constructor(
    public houseService: HomeService,
    public userService: UserService,
    public imageService:ImageService,
    private userCardService:UserCardService
  ) {}
  ngOnInit(): void {
    this.houseService.getHome(this.card?.houseId!,this.userService,this.imageService);
  }

  cencelCard(id:number){
    this.userCardService.deleteCard(id);
  }


}
