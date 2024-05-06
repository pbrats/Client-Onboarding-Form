import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LanguageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
