import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [RouterLink, ChatboxComponent, LanguageComponent],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
  language!: string;
  darkTheme!: boolean;
  constructor(private languageService: LanguageService, private themeService: ThemeService) { }
  ngOnInit(){
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }
}
