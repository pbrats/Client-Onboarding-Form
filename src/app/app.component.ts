import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { BottomComponent } from './component/bottom/bottom.component';
import { FooterComponent } from './component/footer/footer.component';
import { LanguageComponent } from './component/language/language.component';
import { ThemeComponent } from './component/theme/theme.component';
import { ThemeService } from './service/theme.service';
import { ChatboxComponent } from './component/chatbox/chatbox.component';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BottomComponent, FooterComponent, LanguageComponent, ThemeComponent, ChatboxComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beev';
  darkTheme!: boolean;
  language!: string;
  constructor(private themeService: ThemeService, private languageService: LanguageService) { }
  ngOnInit(){
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }
}
