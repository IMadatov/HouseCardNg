import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/Services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  
  constructor(public serviceAuth:AuthService) {
    
  }
  ngOnInit(): void {
    this.serviceAuth.checkLogin();
  }
}
