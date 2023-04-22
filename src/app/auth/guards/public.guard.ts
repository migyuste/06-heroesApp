import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

import { Observable, map, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanActivate, CanMatch {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      tap((isAuthenticated) => {
        console.log('Authenticated:', isAuthenticated);
      }),
      tap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['./']);
        }
      }),
      map((isAuthenticated) => !isAuthenticated)
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> {
    console.log('canMatch');
    console.log({ route, segments });

    return this.checkAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('canActivate');
    console.log({ route, state });

    return this.checkAuthStatus();
  }
}
