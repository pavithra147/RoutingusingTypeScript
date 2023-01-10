import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  const myobs$= new Observable(obs=>{
    console.log("start observable");
    obs.next("Observable program");  //obs.next will return observable program
    obs.next("100");
    obs.next("200");
    
     console.log("End Observable")
  });
  myobs$.subscribe(sub=>{                //using one subscribe multiple value can return
    console.log("subscribe=",sub);   //observable function is called by subscribe function
  },
 );
  

  }
}


