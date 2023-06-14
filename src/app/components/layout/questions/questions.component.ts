import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
interface Question {
  soru: string;
  yanit: string;
  Color?: string;
  display?: boolean;
  fontsize?:string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']

})

export class QuestionsComponent implements OnInit {
  display: boolean = true;
  displayModal: boolean= false;
  displayBasic: boolean= false;
  soru!:string;

  showModalDialog() {
    this.displayModal = true;
    
}

showBasicDialog() {
    this.displayBasic = true;
}
  questions: Question[] = [
    {
      "soru": "Sosyal desteklerden yararlanmak istiyorum. Hangi desteklerden faydalanabilirim?",

      "yanit": "Sosyal Destek Kartı (İstanbulkart), Eşya Desteği, Tersine Göç Desteği, İstanbul Halk Süt Desteği, İstanbul Halk Ekmek Desteği, Askıda Fatura, Aile Destek Paketi, Anne Bebek Destek Paketi, Eğitim Destek Paketi, Tablet Desteği, Yeni Doğan Desteği Paketi."
    },

    {
      "soru": "Birden fazla destek için müracaat edebilir miyim?",
   
      "yanit": "Adınıza oluşturulan sosyal destek talepleriniz genel bir talep olup, değerlendirme neticesinde haneniz için en uygun destekler hassasiyetle belirlenip tarafınıza ulaştırılır. Her bir sosyal destek için ayrı bir müracaat yapılmasına gerek yoktur."
    },

    {
      "soru": "Aynı haneden birden fazla kişi sosyal destek başvurusu yapabilir mi?",
    
      "yanit": "Sosyal destek talepleri kişi bazlı değil hane bazlı oluşturulur. Haneden bir bireyin başvuru yapması durumunda tüm hane bireyleri sosyal destekten yararlanacak bireyler olarak değerlendirilir."
    },

    {
      "soru": "Sosyal destek başvurusu oluşturduktan sonraki süreç nasıl ilerler?",
     
      "yanit": "Sosyal destek başvurusu oluşturulduktan sonra beyan edilen bilgiler neticesinde ön değerlendirme yapılır. Uygun görülürse hanenin kapsamlı sosyal incelemesi gerçekleştirilir. Sosyal inceleme sonrasında uygun görülen vatandaşlarımızdan durumlarını gösteren belgeler veya KVKK metni onayı istenir. Değerlendirme süreci sonrasında uygun görülen vatandaşlar sosyal desteklerden faydalanır."
    },

    {
      "soru": "Evrak teslim süreci nasıl ilerler?",
  
      "yanit": "Evrak teslim süreci hanenizde gerçekleştirilen sosyal inceleme sırasında onayladığınız KVKK metni veya SMS ile iletilen evrak detayı ve teslimat adresine ilişkin gerekli bilgilendirmelerin yapılması ile yürütülür."
    }

  ]
 addquestion!:string;
  addVisible:boolean=false;
  
  showDialog(){
    this.addVisible=true;
  }

  constructor(
    private primengConfig: PrimeNGConfig,
    private cdr:ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }


  toggle(question: Question) {
    if(question.display==true){
     question.display=false,
     question.Color="",
     question.fontsize="black"
    }else{
      question.display=true
      question.Color="#1D428A"
      question.fontsize="white"
    }
    this.cdr.markForCheck();
  }
  onsave() {
    this.soru = this.soru;
  }
  remove(){
    this.questions.pop()
  }


  doSave(e:any){
    this.questions.push(e);

    this.cdr.markForCheck();
  }
}