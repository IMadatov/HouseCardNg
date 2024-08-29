import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { HttpService } from '../Service/http.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section
      class="listing bg-slate-200 rounded shadow-2xl"
      style="border: 1px solid rgba(0,0,0,0.05)"
    >
      <div class="h-96">
        <img class="w-full h-full rounded-t" [src]="" />
      </div>
      <h2 class="listing-header p-2">{{ housingLocation.name }}</h2>
      <p class="listing-location p-2">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/detail', housingLocation.houseId]">Learn more</a>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HouseingLocationComponent  {
  @Input() housingLocation!: Housinglocation;
  imageUrl:string|ArrayBuffer='';

  constructor(private service:HttpService) {}
  

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
}
