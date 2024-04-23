import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  language!: string;
  ngOnInit() {
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", lang);
    if (lang) {
      this.language = lang;
    }
  }
}
