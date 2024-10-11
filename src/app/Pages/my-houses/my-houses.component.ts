import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyhousesService } from '../../Service/Services/myhouses.service';
import { HouseListComponent } from '../house-list/house-list.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../../Models/housinglocation';
import { ThisReceiver } from '@angular/compiler';
import { HomeService } from '../../Service/Services/home.service';
@Component({
  selector: 'app-my-houses',
  standalone: true,
  imports: [RouterLink, CommonModule, HouseListComponent],
  templateUrl: './my-houses.component.html',
  styleUrl: './my-houses.component.css',
  providers:[HomeService]
})
export class MyHousesComponent implements OnInit {

  
  constructor(
    public myHouseService: MyhousesService,
    
  ) {}

  ngOnInit(): void {
    console.log('myHouse');
    this.myHouseService.getInCardsMyHouse();
    // this.myHouseService.getInCardsMyHouse();   
  }
  getBuyerUserId(house: Housinglocation): number {
    if (!this.myHouseService.selectedFromCardList) return -1;

    let index = this.myHouseService.selectedFromCardList.findIndex(
      (x) => x.houseId == house.houseId
    );
    
    if (index == -1 || index == undefined) return -1;
    
    let userBuyerId =
      this.myHouseService.selectedFromCardList[index].buyerUserId;


    return userBuyerId!;
  }
}
