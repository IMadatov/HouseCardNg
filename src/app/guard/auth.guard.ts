import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const router=inject(Router)
  
  
  if(authService.authenticated){  
    
    return true;
  }
  else {
    router.navigateByUrl("/")
    return false;
  }

};
