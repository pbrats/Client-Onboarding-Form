import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject: BehaviorSubject<string>;
  public language$: Observable<string>;

  constructor() {
    // Initialize language from session storage or default to 'french'
    const storedLanguage = sessionStorage.getItem('language');
    this.languageSubject = new BehaviorSubject<string>(storedLanguage || 'french');
    this.language$ = this.languageSubject.asObservable();
  }

  setLanguage(language: string): void {
    this.languageSubject.next(language);
    sessionStorage.setItem('language', language); // Store language in session storage
  }
}