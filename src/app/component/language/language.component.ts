import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  @Output() actionEventEmitter = new EventEmitter();
  language: string = 'french';
  ngOnInit() {
    const tempLanguage = sessionStorage.getItem('language');
    if (tempLanguage) {
      this.language = tempLanguage;
      console.log("language: ", this.language);
    }
  }

  // setLanguageFrench(){
  //   this.language = 'french';
  //   sessionStorage.setItem('language','french');
  //   // window.location.reload();
  //   const tempLanguage  = sessionStorage.getItem('language');
  //   if(tempLanguage){
  //     this.language = tempLanguage;
  //     console.log("language change: ",this.language);
  //   }
  // }
  // setLanguageEnglish(){
  //   this.language = 'english';
  //   sessionStorage.setItem('language','english');
  //   // window.location.reload();
  //   const tempLanguage  = sessionStorage.getItem('language');
  //   if(tempLanguage){
  //     this.language = tempLanguage;
  //     console.log("language change: ",this.language);
  //   }
  // }
  change(lang: string) {
    this.language = lang;
    sessionStorage.setItem('language', lang);
    this.actionEventEmitter.emit(lang);
    console.log("language change: ", lang);
  }
}
