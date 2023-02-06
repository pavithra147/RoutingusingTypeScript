import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable,  ReplaySubject,  Subject } from "rxjs";

@Injectable()
export class ViewService{
    private subject:Subject<any> 
     public  obsfromsubject$: Observable<any>                    //"subject" will not retain the previous value
    private behsubject:BehaviorSubject<any>                       //"Behavior Subject" will retain the previous value
     public  obsFromBehSub$:  Observable<any>   
     private  replaySubject:ReplaySubject<any> 
     public  obsFromRepSub$:  Observable<any>                                   
    constructor(){
       this.subject=new Subject<number>();
     this.obsfromsubject$=this.subject.asObservable();  //The purpose of this is to prevent leaking the "observer side" of the Subject out of an API. Basically to prevent a leaky abstraction when you don't want people to be able to "next" into the resulting observable
       this.behsubject=new BehaviorSubject<number>(0);
       this.obsFromBehSub$=this.behsubject.asObservable(); 
       this.replaySubject=new ReplaySubject<number>(2);  //REPLAYSUBJECT also retain previous values. But in this we can how many previous values need . Here it got mentioned as (2) 
       this.obsFromRepSub$=this.replaySubject.asObservable(); 
    }
    sendCount(number:number){
        this.subject.next(number);
        // this.behsubject.next(number);
    }
    sendBehCount(number:number){
      this.behsubject.next(number);
    }
    sendReplayCount(number:number){
      this.replaySubject.next(number);
    }
}