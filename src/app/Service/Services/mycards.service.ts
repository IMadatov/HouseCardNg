import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserCard } from '../../Models/user-card';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MycardsService {
  public allCards: UserCard[] | undefined;
  constructor(
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  deleteCard(id: number) {
    this.httpService.deleteUserCard(id!).subscribe({
      next: () => {
        console.log(this.allCards);

        let index = this.allCards?.findIndex((x) => x.id == id);

        this.allCards?.splice(index!, 1);

        console.log(this.allCards);

        this.toastr.info('Refused');
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  getAllCards() {
    this.httpService.getUserCards().subscribe({
      next: (rep: UserCard[]) => {
        this.allCards = rep;
        console.log(this.allCards);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
