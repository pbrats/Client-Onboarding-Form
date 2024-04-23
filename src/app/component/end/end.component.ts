import { Component } from '@angular/core';
import { setActiveConsumer } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [RouterLink, ChatboxComponent, LanguageComponent],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
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
    console.log("language change end ", event);
  }
}
