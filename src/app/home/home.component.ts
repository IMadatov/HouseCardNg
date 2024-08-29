import { Component, Inject, Injectable } from '@angular/core';
import { HouseingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { JsonPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../Service/http.service';

@Injectable()
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseingLocationComponent, NgForOf, JsonPipe],
  template: `
    <section>
      <form class="flex gap-5">
        <div class="w-72">
          <div class="relative w-full min-w-[200px] h-10 mt-5">
            <input
              class="peer w-full h-full bg-transparent text-blue-950 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-b-sky-500 focus:border-b-sky-500"
              placeholder=" "
              #filter
            /><label
              class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500"
              >Filter by city
            </label>
          </div>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          type="button"
          (click)="filterResult(filter.value)"
        >
          Search
        </button>
      </form>
    </section>

    <section class="pt-5 flex flex-wrap gap-[5%]  w-auto">
      <app-housing-location
        class="w-[30%] mb-8"
        *ngFor="let hl of filterHousingLocationList"

        [housingLocation]="hl" 

      >
      </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filterHousingLocationList: Housinglocation[] | undefined;
  constructor(public service: HttpService) {
    this.service.getAllHouses().subscribe({
      next:respo=>{
        this.filterHousingLocationList=respo;
        console.log("----------------------------")
        console.log(this.filterHousingLocationList)
      },
      error:err=>console.error(err)
    })
  }

  filterResult(text: string) {
    if (!text) {
      
      return;
    }
  }


}
