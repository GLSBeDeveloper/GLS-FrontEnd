import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';

import { VrpAuthenticationService } from '@app/vrp-common/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class VrpAuthenticationGuard implements CanActivate, CanLoad {

    constructor(
        private _router: Router,
        private _authentication: VrpAuthenticationService,
    ) { }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        console.log('VrpAuthenticationGuard -> canLoad -> this._authentication.user', this._authentication.user);
        return (this._authentication.user) ? Observable.of(true) : this._authentication.isLoggedIn().pipe(
            catchError((err) => {
                this._router.navigate(['login']);
                return Observable.of(false);
            }),
        );
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url = state.url;
        console.log('VrpAuthenticationGuard -> canActivate -> url', url);
        this._authentication.redirectUrl = url;
        if (this._authentication.isDriver()) {
            this._router.navigate(['login']); // redirect if it is driver
            return false;
        } else {
            return !!this._authentication.user;
        }
    }
}
