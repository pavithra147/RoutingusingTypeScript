import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:'User',component:UserComponent},
 //By declaring like this angular will assume this data will be "DYNAMIC"
{path:'View',component:ViewComponent},
{path:'Admin',component:AdminComponent},
{path:'Admin/:id/:name',component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
