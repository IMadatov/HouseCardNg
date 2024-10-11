import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import { TabNotificationListComponent } from "./tab-notification-list/tab-notification-list.component";
import { TabNotificationService } from '../../Service/Services/tab-notification.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab-notification',
  standalone: true,
  imports: [MatListModule, TabNotificationListComponent,CommonModule],
  templateUrl:'./tab-notification.component.html',
  styleUrl: './tab-notification.component.css',
  providers:[TabNotificationService]
})
export class TabNotificationComponent implements OnInit ,OnDestroy{
 /**
  *
  */
 constructor(public service:TabNotificationService) {}
  ngOnDestroy(): void {
    this.service.oldCard();
  }
  ngOnInit(): void {
    this.service.getAllOfferUsers();
  }
  
}
