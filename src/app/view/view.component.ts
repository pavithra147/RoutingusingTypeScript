import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   public count=0;
   public sub=false;
  constructor(private view:ViewService) {}
   

  ngOnInit(): void {
  }

  emit(){
    if(this.count>=0){
      this.count++;
    this.view.sendCount(this.count);
    this.view.sendBehCount(this.count);
  }
  this.view.sendReplayCount(this.count);
    if(!this.sub){
      this.sub=true;
      this.view.obsFromBehSub$.subscribe(x=>{
        console.log("from behsub 2:",x);
      })
    }
    if(this.count==3){
      this.view.obsFromRepSub$.subscribe(x=>{
        console.log("from ReplaySubject:",x);
      })
    }
  }

}
