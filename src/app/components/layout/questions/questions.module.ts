import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { RouterModule } from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { QusetionaddComponent } from '../qusetionadd/qusetionadd.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    QuestionsComponent,
    QusetionaddComponent
   
  ],
  imports: [//localhost:4200
    CommonModule,
    DialogModule,
    DynamicDialogModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    FormsModule,
    RouterModule.forChild([{path: "", component: QuestionsComponent}])    
  ]
})
export class QuestionsModule { }

