import { Component, OnInit } from '@angular/core';
import { UserCardService } from '../../Service/Services/user-card.service';
import { ToastrService } from 'ngx-toastr';
import { MyCardsListComponent } from "./my-cards-list/my-cards-list.component";
import { CommonModule } from '@angular/common';
import { UserService } from '../../Service/Services/user.service';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [MyCardsListComponent,CommonModule],
  templateUrl: './my-cards.component.html',
  providers:[UserService]
})
export class MyCardsComponent implements OnInit {
  /**
   *
   */
  constructor(
    public userCardService: UserCardService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userCardService.getAllCards();
  }
}
