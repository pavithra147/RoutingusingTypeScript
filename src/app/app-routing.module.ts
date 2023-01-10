import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { CanActivatedChild } from './CanActivatedChild';
import { TestCanActivate } from './guards';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:'User',component:UserComponent ,children:[{
  path:'test',component:ViewComponent}]},
{path:'View',component:ViewComponent,
 canActivate:[AuthGuardService]},
{path:'Admin',component:AdminComponent},
//By declaring like this angular will assume this data will be "DYNAMIC"
{path:'Admin/:id/:name',component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
