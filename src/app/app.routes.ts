import { Router, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MyCardsComponent } from './Pages/my-cards/my-cards.component';
import { MyHousesComponent } from './Pages/my-houses/my-houses.component';
import { CreateHouseComponent } from './Pages/create-house/create-house.component';
import { authGuard } from './guard/auth.guard';
import { TabNotificationComponent } from './Pages/tab-notification/tab-notification.component';

export const routes: Routes = [
  // history=Router.arguments.URL,
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'profile',  
    component: ProfileComponent,
    canActivate:[authGuard]
  },
  { 
    path:'profile/mycards',
    component:MyCardsComponent,
    canActivate:[authGuard]
  },
  {
    path:'profile/myhouses',
    component:MyHousesComponent,
    canActivate:[authGuard]
  },
  {
    path:'profile/myhouses/tab-notification',
    component:TabNotificationComponent,
    canActivate:[authGuard]
  },
  {
    path:'profile/createhouse',
    component:CreateHouseComponent,
    canActivate:[authGuard]
  }
];
