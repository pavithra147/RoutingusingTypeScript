import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }  // ROUTER gives overall routing//to do logic for navigating page using ts we have inject router
   
  ngOnInit(): void {
  }
  onView(){
    //Using Some Logic
    //how can we navigate to a page
// THERE ARE TWO METHODS TO NAVIGATE
//One is
// this.router.navigateByUrl('/View');
//Two is
this.router.navigate(['/View']);//navigate is property type here we have to give array type of data
  }

}
