import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  language!: string;
  constructor(private languageService: LanguageService) { }
  ngOnInit() {
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }
}
