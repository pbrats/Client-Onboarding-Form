import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ChatboxComponent, LanguageComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  language!: string;
  ngOnInit() {
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", lang);
    if (lang) {
      this.language = lang;
    }
  }
  change(event: any) {
    this.language = event;
    console.log("language change start: ", event);
  }
}
