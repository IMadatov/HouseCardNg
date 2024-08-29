import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `
    <div
      style="width: 100%; height: auto; display: flex;  justify-content: center;"
    >
      <div
        class="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border w-9/12"
      >
        <!-- <app-user-card
          *ngFor="let item of service.userList"
          [user]="item"
          class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700"
        >
        </app-user-card> -->
      </div>
    </div>
  `,
  styleUrl: './user.component.css',
})
export class UserComponent  {
  
  constructor() {
  }
}
