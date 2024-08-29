import { Component, Inject, Injectable, OnInit } from '@angular/core';

import { CommonModule, JsonPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { HomeService } from '../../Service/Services/home.service';
import { FormsModule } from '@angular/forms';
import { HouseListComponent } from '../house-list/house-list.component';

@Injectable()
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    CommonModule,
    FormsModule,
    HouseListComponent,
  ],
  template: `
    <div class="flex-col  m-0  mt-5" style="width: 100%;">
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
            placeholder="Search City, State..."
            required
            name="filterText"
            [(ngModel)]="filterText"
            (input)="homeService.filterResult(this.filterText)"
          />
          <!-- <button
            type="submit"
            (click)="homeService.filterResult(this.filterText)"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button> -->
        </div>
      </form>

      <section class="pt-5 flex flex-wrap gap-[5%] " style="width:100%">
        <app-house-list
          class="w-[30%] mb-8"
          *ngFor="let hl of homeService.filterHousingLocationList"
          [housingLocation]="hl"
        />
      </section>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  filterText: string = '';
  constructor(public homeService: HomeService, private router: Router) {}
  ngOnInit(): void {
    this.homeService.getHomes();
  }
}
