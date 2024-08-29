import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../../Models/housinglocation';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../../Service/http.service';
import { ToastrService } from 'ngx-toastr';
import { UserCardService } from '../../Service/Services/user-card.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col items-center p-0 mt-10">
      <img class="h-lvh w-3/4 rounded-xl" [src]="userCardService.imageUrl" />
      <div class="text-left">
        <h1 class="font-bold text-6xl">
          {{ userCardService.housingLocation?.houseName }}
        </h1>
        <div class="flex text-xl mt-2">
          <img src="../../assets/location-pin.svg" alt="" />
          {{ userCardService.housingLocation?.city }},
          {{ userCardService.housingLocation?.state }}
        </div>
        <br />
        <p class="text-green-800 font-bold text-2xl">
          About this housing location
        </p>
        <h4>
          Units available:{{ userCardService.housingLocation?.availableUnits }}
        </h4>
        <h4>Wifi : {{ userCardService.housingLocation?.wifi }}</h4>
        <h4>Laundry : {{ userCardService.housingLocation?.loundry }}</h4>
      </div>

      <!-- <section class="pt-7 ">
        <h2 class="font-bold font-mono text-2xl">Apply now to live here</h2>

        <form [formGroup]="applyForm" class="flex flex-col">
          <label for="first-name">First Name</label>
          <input type="text" formControlName="firstName" class="border-2" />

          <label for="last-name">Last Name</label>
          <input type="text" formControlName="lastName" class="border-2" />

          <label for="email">Email</label>
          <input type="email" formControlName="email" class="border-2" />

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-24 "
            type="submit"
          >
            Apply
          </button>
        </form>
      </section> -->
    </div>
  `,
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  housingLocation: Housinglocation | undefined;
  housingLocationId = 0;

  applyForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
      Validators.email,
    ]),
  });

  constructor(
    public service: HttpService,
    private routeActive: ActivatedRoute,
    private toestr: ToastrService,
    public userCardService: UserCardService,
  ) {
    this.housingLocationId = Number(this.routeActive.snapshot.params['id']);
  }
  ngOnInit(): void {
    // console.log('s', this.housingLocationId);

    this.userCardService.getHouse(this.housingLocationId);
  }
}
