import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 Admin!: { id: string; name: string; };  //Assume admin variable with id and name to get the data
  constructor(private router: ActivatedRoute) { }  //"ACTIVATEDROUTE " gives information about current Route

  ngOnInit(): void {                     // one drawback of using snapshot 
    this.Admin = {                //ngOnInit() it will load the component once it will not reload the component
      id: this.router.snapshot.params['id'],   //To get the data from url from template of component inside the [] is identifier
      name: this.router.snapshot.params['name'],  
    };
    // this.router.params.subscribe(data=>    //whenever parameters changes need to listen using suscribe it is third party tool
    //   {                                    // subscribe will indicate the angular to listen this type of data
    //     this.Admin={
    //       id: data['id'],
    //       name:data['name'],
    //     }
    //   })
  }

}
