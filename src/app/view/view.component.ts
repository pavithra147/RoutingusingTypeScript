import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit,OnChanges {
   public count=0;
   public sub=false;
   @Input() fromParent!:string;
   lifeCycleTicks: number=0;
   oldTheData!: string;
   lifeCycle:number=0;
  data: string[] = ['initial'];
  constructor(private view:ViewService,private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }
   
  ngOnChanges(changes: SimpleChanges): void {
    this.lifeCycleTicks++;
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    this.lifeCycleTicks++;
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log(++this.lifeCycle);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
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
