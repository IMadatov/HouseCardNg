import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../Models/user';
import { HttpService } from '../../../Service/http.service';
import { Housinglocation } from '../../../Models/housinglocation';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div
      role="button"
      class="flex h-24 items-center w-full p-3 py-1 pl-4 pr-1 bg-gray-300 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-400 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
    >
      <div class="flex justify-between " style="width: 60%;">
        <div>{{ user?.['userName'] }} {{ user?.['userLastName'] }}</div>
        <div>
          {{user?.['email']}}
        </div>
      </div>
      <div class=" ml-3 border border-gray-700 rounded top-0 h-full"></div>

      <div class="ml-6 flex w-1/3 h-full  items-center ">
        <div class="w-1/3 h-full ">
          <img [src]="imageUrl" class="w-full h-full rounded-2xl" />
        </div>
        <div class="w-auto h-full  flex items-center justify-center p-1">
          <p>
            {{house?.["houseName"]}}
          </p>
        </div>
      </div>
      <div class="grid ml-auto place-items-center justify-self-end">
        <button
          class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 hover:bg-red-500 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          (click)="deleteUser(user.userId)"
        >
          <span
            class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  `,
  styleUrl: './user-card.component.css',
})
export class UserCardComponent implements OnInit {
  @Input() user: User | any | undefined;
  imageUrl: string | ArrayBuffer = '';
  house: Housinglocation | undefined;

  constructor(
    private service: HttpService,
    
    private router: Router,
    private toestr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getHouse(this.user?.houseId);
  }

  getImage(id: number) {
    this.service.getImageById(id).subscribe({
      next: (resp: Blob) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrl = e.target.result;
        };

        reader.readAsDataURL(resp as Blob);
      }
    });
  }

  getHouse(id: number) {
    this.service.getByIdHouse(id).subscribe({
      next: (res) => {
        this.house = res;
        this.getImage(this.house.photoId);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteUser(id: number) {
    // alert('delete fun');
    this.service.deleteUser(id).subscribe({
      next: (data) => {
        // alert('deleted');
        this.toestr.info('Deleted');
      },
      error: (err) => {
        console.error(err);
        alert('delete error');
      },
    });
  }
}
