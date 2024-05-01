import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LanguageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // @Input() language!: string;
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
}
