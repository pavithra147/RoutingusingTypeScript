import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authservice: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
       let isLoggedIn= this.authservice.isAuthenticated();
       if(isLoggedIn){
        return true;
       }
       else{
           this.router.navigate(['/']);
       }
       return true;
    }

}