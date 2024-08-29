import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../Service/http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col items-center p-0 mt-10">
      <img class="h-lvh w-3/4 rounded-xl" [src]="imageUrl" />
      <div class="text-left">
        <h1 class="font-bold text-6xl">{{ housingLocation?.name }}</h1>
        <div class="flex text-xl mt-2">
          <img src="../../assets/location-pin.svg" alt="" />
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </div>
        <br />
        <p class="text-green-800 font-bold text-2xl">
          About this housing location
        </p>
        <h4>Units available:{{ housingLocation?.availableUnits }}</h4>
        <h4>Wifi : {{ housingLocation?.wifi }}</h4>
        <h4>Laundry : {{ housingLocation?.loundry }}</h4>
        <button (click)="getImage()">get Imagee</button>
      </div>

      <section class="pt-7 ">
        <h2 class="font-bold font-mono text-2xl">Apply now to live here</h2>

        <form
          [formGroup]="applyForm"
          class="flex flex-col"
          (submit)="submitApply()"
        >
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
      </section>
    </div>
  `,
  styleUrl: './detail.component.css',
})
export class DetailComponent {
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

  imageUrl: string | ArrayBuffer = '';
  constructor(
    public service: HttpService,
    private routeActive: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.housingLocationId = Number(this.routeActive.snapshot.params['id']);
    service.getByIdHouse(this.housingLocationId).subscribe({
      next: (resp) => {
        this.housingLocation = resp;
        this.getImage();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getImage() {
    this.service.getImageById(this.housingLocation?.photoId).subscribe({
      next: (resp: Blob) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrl = e.target.result;
        };

        reader.readAsDataURL(resp as Blob);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitApply(): void {
    if (!this.applyForm.invalid) {
      this.applyForm.valid;
    }
  }
}
