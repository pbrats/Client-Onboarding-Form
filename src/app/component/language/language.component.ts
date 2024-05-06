import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  language!: string;
  constructor(private languageService: LanguageService) { }
  ngOnInit() {
    // this.languageService.language$.subscribe(language => {
    //   this.language = language;
    // });
    // const lang = sessionStorage.getItem('language');
    // console.log("language oninit: ", this.language);
    // console.log("language session storage: ", lang);
    // //to check if there is a language already selected and stored in session storage
    // if (lang !== null) {
    //   this.language = lang;
    // } else {
    //   //if there is not a language already selected set starting language 'french'
    //   this.languageService.language$.subscribe(language => {
    //     this.language = language;
    //   });
    //   sessionStorage.setItem('language', this.language);
    // }
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }
  change(language: string) {
    this.languageService.setLanguage(language);
    console.log("language change: ", language);
    this.language = language;
  }
}