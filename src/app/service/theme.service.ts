import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject: BehaviorSubject<boolean>;
  public darkTheme$: Observable<boolean>;

  constructor() {
    // Initialize darkTheme from session storage or default to false
    const storedTheme = sessionStorage.getItem('darkTheme');
    console.log("dark theme storedValue : ", storedTheme);
    const dark = storedTheme ? JSON.parse(storedTheme) : false;

    this.themeSubject = new BehaviorSubject<boolean>(dark || false );
    this.darkTheme$ = this.themeSubject.asObservable();
  }
  setTheme(darkTheme: boolean): void {
    this.themeSubject.next(darkTheme);
    sessionStorage.setItem('darkTheme', JSON.stringify(darkTheme)); // Store darkTheme in session storage
  }
}