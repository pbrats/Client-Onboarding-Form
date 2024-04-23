import { Component } from '@angular/core';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [LanguageComponent],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  language!: string;
  ngOnInit() {
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", lang);
    if (lang) {
      this.language = lang;
    }
  }
}
