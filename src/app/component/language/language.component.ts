import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { LanguageService } from '../../service/language.service';

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
  // language!: string ;
  constructor(private languageService: LanguageService) { }
  ngOnInit() {
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", this.language);
    console.log("language session storage: ", lang);
    //to check if there is a language already selected and stored in session storage
    if (lang !== null) {
      this.language = lang;
    } else {
      //if there is not a language already selected set starting language 'french'
      this.languageService.language$.subscribe(language => {
        this.language = language;
      });
      sessionStorage.setItem('language', this.language);
    }
    // const tempLanguage = sessionStorage.getItem('language');
    // if (tempLanguage) {
    //   this.language = tempLanguage;
    //   console.log("language: ", this.language);
    // }
    // this.languageService.language$.subscribe(language => {
    //   this.language = language;
    // });
  }
  change(language: string) {
    this.languageService.setLanguage(language);
    sessionStorage.setItem('language', language);
    console.log("language change: ", language);
    this.language = language;
  }
  // change(lang: string) {
  //   this.language = lang;
  //   sessionStorage.setItem('language', lang);
  //   this.actionEventEmitter.emit(lang);
  //   console.log("language change: ", lang);
  // }
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
}