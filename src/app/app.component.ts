import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice:AuthService){}
  title = 'RoutingusingTypeScript';
  onLogInClick(){
    this.authservice.login();
  }
  onLogOutClick(){
    this.authservice.logout();
  }
}
