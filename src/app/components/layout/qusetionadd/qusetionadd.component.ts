import { Component, EventEmitter, Input, Output } from '@angular/core';


interface Question {
  soru: string;
  yanit: string;
}
@Component({
  selector: 'app-qusetionadd',
  templateUrl: './qusetionadd.component.html',
  styleUrls: ['./qusetionadd.component.css']
})
export class QusetionaddComponent {

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter();

  @Input() list: Question[] = [];
  @Output() listChange=new EventEmitter() //kendi belirlediğim isimle emit oluşturdum,

  
  objectadd: Question={soru:'', yanit:''};

  @Output() onSave = new EventEmitter(); 

  saveDialog() {
    this.list.push(this.objectadd);
  //  this.listChange.emit(this.objectadd)//objectadd objemi emit ettim 

    this.onSave.emit(this.objectadd);

    this.doHide();
  }

  doShow() {
    this.objectadd={
      soru:'',
      yanit:''
    };
    this.displayChange.emit(true);
  }

  doHide() {
    this.displayChange.emit(false);
  }

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
    this.displayChange.emit(false);
  }
}
