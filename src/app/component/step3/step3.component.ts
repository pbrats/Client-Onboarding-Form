import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ChatboxComponent, LanguageComponent],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  constructor(private router: Router) { }
  submitted: boolean = false;
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
    console.log("language change step3 ", event);
  }
  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.router.navigate(['end']);
    }, 2000);
  }

}
