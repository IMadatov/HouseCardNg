import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BodyComponent } from './Components/body/body.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    RouterModule,
    NgIf,
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TodoApp';
  onSign: boolean = true;
  /**
   *
   */
  constructor(router: Router) {
    // if (userService.authenticated) {
    //   userService.userProfile().subscribe({
    //     next: (x) => {
    //       console.log(x);
    //       this.userService.username = (<any>x)[
    //         'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
    //       ];
    //       this.userService.user = x;
    //     },
    //   });
    // }

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onSign = router.isActive('/signin', false);
        this.onSign = this.onSign || router.isActive('/signup', true);
      }
    });
  }
}
