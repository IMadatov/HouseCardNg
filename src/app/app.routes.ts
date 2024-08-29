import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { UserComponent } from './Pages/user/user.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MyCardsComponent } from './Pages/my-cards/my-cards.component';
import { MyHousesComponent } from './Pages/my-houses/my-houses.component';
import { CreateHouseComponent } from './Pages/create-house/create-house.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'users',
    component: UserComponent,
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
  },
  {
    path:'profile/mycards',
    component:MyCardsComponent,
    
  },
  {
    path:'profile/myhouses',
    component:MyHousesComponent
  },
  {
    path:'profile/createhouse',
    component:CreateHouseComponent
  }
];
