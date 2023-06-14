import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import {TabMenuModule} from 'primeng/tabmenu';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from './footer/footer.component';
import { QusetionaddComponent } from './qusetionadd/qusetionadd.component';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    NavbarComponent,
   HeaderComponent,
   LayoutComponent,
   MenuComponent,
   FooterComponent,


   
   
  ],
  imports: [
    CommonModule,
    DialogModule,
    TabMenuModule,
    RouterModule.forChild([
      {
        path:"",
        component: LayoutComponent,
        children:[
          {
            path:"questions",
            component:QuestionsComponent

          },
          {
            path:"home",
            component:HomeComponent

          }
        ]
      
      },
    ]
    )
  ]
})
export class LayoutModule { }
