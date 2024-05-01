import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [RouterLink, ChatboxComponent, LanguageComponent],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
  language!: string;
  constructor(private languageService: LanguageService) { }
  ngOnInit() {
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", this.language);
    console.log("language session storage: ", lang);
    //to check if there is a language already selected and stored in session storage
    if (lang!== null) { 
      this.language = lang;
    }
  }
  // ngOnInit() {
  //   const lang = sessionStorage.getItem('language');
  //   console.log("language oninit: ", lang);
  //   if (lang) {
  //     this.language = lang;
  //   }
  // }
  // change(event: any) {
  //   this.language = event;
  //   console.log("language change end ", event);
  // }
}
