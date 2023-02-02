import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import {filter} from 'rxjs/operators'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit,OnDestroy {
  subscription: any;

  constructor() { }
  ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }
 

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
  
 // custom observable
  const customObservable=new Observable((observer: any)=>{
  let count=0;
  setInterval(()=>{
    observer.next(count); 
      if(count >3){
        observer.error("count is greater than 3");
      }
      if(count>2){
        observer.complete();
      }
      count++;  
    },2000)       //next will give the count whenever it get fired by subscribing the observabl
  })                                  //'map' is the method present in rxjs operator is used to manipulate the data before the data is send to observable.subscribe()
                              //'pipe'is the method in observable to use rxjs operator we have to use pipe()
this.subscription=customObservable.pipe(map(data=>{return console.log('count is'),data})).subscribe({next:(data:any)=>
   console.log(data),error:(e)=>console.log(e),complete:()=>console.log("completed")});


}

}



