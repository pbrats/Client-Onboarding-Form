import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ChatboxComponent, LanguageComponent],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  submitted: boolean = false;
  language!: string;
  constructor(private router: Router, private languageService: LanguageService) { }
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
  //   console.log("language change step3 ", event);
  // }
  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.router.navigate(['end']);
    }, 2000);
  }

}
