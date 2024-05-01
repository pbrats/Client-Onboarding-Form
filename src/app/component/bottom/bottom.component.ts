import { Component, Input, SimpleChanges } from '@angular/core';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [LanguageComponent],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  // @Input() language!: string;
  // ngOnChanges(changes: SimpleChanges) { 
  //   console.log('changes: ', changes);
  //   if (changes['language']) {
  //     console.log("change language bottom current value: ", changes['language'].currentValue);
  //     this.language = changes['language'].currentValue;
  //   }
  // }
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
