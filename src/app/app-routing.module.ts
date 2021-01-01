import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { ListproductComponent } from './listproduct/listproduct.component';

const routes: Routes = [
    {path:'add' , component:AddproductComponent},
    {path:'list', component:ListproductComponent},
    {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
