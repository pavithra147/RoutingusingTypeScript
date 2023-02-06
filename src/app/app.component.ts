import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ViewService } from './view/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count:any;
  constructor(private authservice:AuthService,private view:ViewService){
    this.view.obsfromsubject$.subscribe(x=>{
      console.log(x);
      this.count=x;
    })
   // this.view.obsfromsubject$.next("Hello");
   this.view.obsFromBehSub$.subscribe(x=>{
    console.log("from behsub",x);
    this.count=x;
  });

  this.view.obsFromRepSub$.subscribe(x=>{
    console.log("from Replaysub",x)
  })
    
  }
  title = 'RoutingusingTypeScript';
  onLogInClick(){
    this.authservice.login();
  }
  onLogOutClick(){
    this.authservice.logout();
  }
}
