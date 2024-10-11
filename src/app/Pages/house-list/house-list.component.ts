import { Component, HostListener, input, Input, OnInit } from '@angular/core';
import { Housinglocation } from '../../Models/housinglocation';
import { Router, RouterLink } from '@angular/router';
import { UserCardService } from '../../Service/Services/user-card.service';
import { ImageService } from '../../Service/Services/image.service';
import { CommonModule, NgIf } from '@angular/common';
import { CreateHouseComponent } from '../create-house/create-house.component';
import { HomeService } from '../../Service/Services/home.service';
import { MyhousesService } from '../../Service/Services/myhouses.service';
import { UserService } from '../../Service/Services/user.service';
import { UserCard } from '../../Models/user-card';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CreateHouseComponent, CommonModule, RouterLink],
  providers: [ImageService,UserService,HomeService],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css',
})
export class HouseListComponent implements OnInit {
  @Input() public housingLocation!: Housinglocation;
  @Input() public onMyHome: boolean = false;
  @Input() public buyerUserId: number | undefined;
  constructor(
    public imageService: ImageService,
    private router: Router,
    private myhomeSerivce: MyhousesService,
    public userService: UserService,
    private homeService:HomeService
  ) {}

   
  ngOnInit(): void {
    if(this.housingLocation.photoId && this.housingLocation.createdUserId){

      this.imageService.getImage(this.housingLocation.photoId);
      this.userService.getUserByID(this.housingLocation.createdUserId);
    }
    
  }

  routerNavigate(str: string) {
    this.router.navigateByUrl(str + this.housingLocation.houseId);
    // console.log(this.router.getCurrentNavigation())
  }
  deleteHome() {
    // console.log('delete------------');
    this.myhomeSerivce.deleteHome(this.housingLocation.houseId);
  }

  addToCard(idCard: number) {
    
    this.homeService.addCard(idCard);
  }
  buyerUser(){
    
  }
}
