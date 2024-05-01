import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { BottomComponent } from './component/bottom/bottom.component';
import { FooterComponent } from './component/footer/footer.component';
import { LanguageComponent } from './component/language/language.component';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BottomComponent, FooterComponent, LanguageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beev';
  // language: string = 'french';
  constructor(private languageService: LanguageService) { }
  language!: string ;
  // ngOnInit() {
    // const lang = sessionStorage.getItem('language');
    // console.log("language oninit: ", this.language);
    // console.log("language session storage: ", lang);
    // //to check if there is a language already selected and stored in session storage
    // if (lang!== null) { 
    //   this.language = lang;
    // }else{ 
    //   //if there is not a language already selected set starting language 'french'
    //   sessionStorage.setItem('language', this.language);
    // }
  // }
  // ngOnChanges(changes: SimpleChanges) { 
  //   console.log('changes: ', changes);
  //   if (changes['language']) {
  //     console.log("changelanguage current value: ", changes['language'].currentValue);
  //     this.language = changes['language'].currentValue;
  //   }
  // }
  change(event: any) {
    this.language = event;
    console.log("language change : ", event);
    this.languageService.setLanguage(event);
  }
}
