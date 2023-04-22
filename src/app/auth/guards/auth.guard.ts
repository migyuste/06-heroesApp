import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {
  constructor() {}
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        console.log('canMatch');
        console.log({ route, segments });
        
        return true;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        console.log('canActivate');
        console.log({route, state});
        
        return true;
    }
}
