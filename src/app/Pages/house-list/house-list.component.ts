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

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CreateHouseComponent, CommonModule, RouterLink],
  providers: [ImageService, UserService],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css',
})
export class HouseListComponent implements OnInit {
  @Input() public housingLocation!: Housinglocation;
  @Input() public onMyHome: boolean = false;
  constructor(
    public imageService: ImageService,
    private router: Router,
    private myhomeSerivce: MyhousesService,
    public userService: UserService,
    private cardService: UserCardService
  ) {}

  ngOnInit(): void {
    this.imageService.getImage(this.housingLocation.photoId);
    this.userService.getUserByID(this.housingLocation.createdUserId);
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
    this.cardService.addCard(idCard);
  }
}
