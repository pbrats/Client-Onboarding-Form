import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
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
