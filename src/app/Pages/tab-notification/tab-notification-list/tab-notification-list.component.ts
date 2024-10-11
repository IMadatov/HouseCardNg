import { Component, Input, OnInit } from '@angular/core';
import { TabNotificationListService } from '../../../Service/Services/tab-notification-list.service';
import { CommonModule } from '@angular/common';
import { UserCard } from '../../../Models/user-card';

@Component({
  selector: 'app-tab-notification-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-notification-list.component.html',
  styleUrl: './tab-notification-list.component.css',
  providers:[TabNotificationListService]
})
export class TabNotificationListComponent implements OnInit {
@Input() userCard:UserCard|undefined;

  /**
   *
   */
  constructor(public service:TabNotificationListService) {}

  ngOnInit(): void {
    this.service.getUser(this.userCard?.buyerUserId!);
    this.service.getCard(this.userCard?.houseId!);
    
  }
}
