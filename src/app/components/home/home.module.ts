import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [//localhost:4200
    CommonModule,
    RouterModule.forChild([{path: "", component: HomeComponent}])    
  ]
})//app => layout => home
export class HomeModule { }

