import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyhousesService } from '../../Service/Services/myhouses.service';
import { HouseListComponent } from '../house-list/house-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-houses',
  standalone: true,
  imports: [RouterLink, CommonModule, HouseListComponent],
  templateUrl: './my-houses.component.html',
  styleUrl: './my-houses.component.css'
})
export class MyHousesComponent implements OnInit {
  
  /**
   *
   */
  constructor(public myHouseService:MyhousesService) {}

  ngOnInit(): void {
    console.log("myHouse")
    this.myHouseService.getHouses();
  }
}
