import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/Services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.checkLogin2().pipe(map(x=>{
    if(!x)router.navigateByUrl('/');
    return x;
  }));
};
