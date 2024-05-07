import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  darkTheme! : boolean; //false;
  language!: string;
  constructor(private themeService: ThemeService, private languageService: LanguageService) { }
  ngOnInit(){
    // const storedValue =sessionStorage.getItem("darkTheme");
    // console.log("dark theme storedValue : ", storedValue);
    // const dark = storedValue ? JSON.parse(storedValue) : false;
    // //to check if there is a darkTheme already selected and stored in session storage
    // if (dark !== null) {
    //   this.darkTheme = dark;
    // } else {
    //   //if the dark theme is not already selected set starting theme 'false'
    //   sessionStorage.setItem('darkTheme',JSON.stringify(this.darkTheme));
    // }
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }
  onChange(event: any) {
  // console.log("event",event);
   console.log("checked ",event.target.checked);
   this.themeService.setTheme(event.target.checked);
  // sessionStorage.setItem("darkTheme",event.target.checked);
  }
}