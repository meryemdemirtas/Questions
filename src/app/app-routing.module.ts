import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  
 
    path: "",    
    loadChildren: ()=> import("./components/layout/layout.module").then(m=> m.LayoutModule),
 
  },
  {
  
 
    path: "home",    
    loadChildren: ()=> import("./components/home/home.module").then(m=> m.HomeModule),
 
  },
  {
  
 
    path: "questions",    
    loadChildren: ()=> import("./components/layout/questions/questions.module").then(m=> m.QuestionsModule),
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
