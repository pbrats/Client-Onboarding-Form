import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  submitted: boolean = false;
  language!: string;
  darkTheme!: boolean;
  step3Form!: FormGroup;
  step3values: any;
  emailSuggestionFlag: boolean = false;
  suggestion: any;
  suggestionClicked: boolean = false;
  constructor(private router: Router, private languageService: LanguageService, private themeService: ThemeService) { }
  ngOnInit() {
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    this.setFormValues();
  }
  setFormValues() {
    this.step3Form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required, Validators.pattern('[0-9+()-.x]*'), Validators.minLength(7), Validators.maxLength(20)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required]),
      postalCode: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      referralCode: new FormControl(""),
      newsletter: new FormControl(""),
      invalidCheck: new FormControl("", [Validators.requiredTrue])
    });
    this.step3Form.get('telephone')?.valueChanges.subscribe(value => {
      if (value) {
        // Remove any existing spaces
        let formattedValue = value.replace(/\s/g, '');
        // Update the value in the form control
        this.step3Form.get('telephone')?.setValue(formattedValue, { emitEvent: false });
      }
    });
    this.step3Form.get('email')?.valueChanges.subscribe(value => {
      if (value) {
        if ((value.split('.')[1] && value.split('.').pop().length >= 3) && !value.endsWith('.com')) {
          this.emailSuggestionFlag = true;
          console.log("typed value", value);
          let part2 = value.split('.')[1].slice(0, 2);
          let part1 = value.split('.')[0];
          this.suggestion = part1 + '.' + part2;
          console.log("suggested value", this.suggestion);
        } else {
          this.emailSuggestionFlag = false;
        }
      }
    });
  }
  onSubmit() {
    this.step3Form.markAllAsTouched();
    if (this.step3Form.valid) {
      console.log("form valid");
      this.step3values = this.step3Form.value;
      console.log("step3values :", this.step3values);
      sessionStorage.setItem('user', JSON.stringify(this.step3Form.value));
      this.submitted = true;
      setTimeout(() => {
        this.router.navigate(['end']);
      }, 2000);
    } else {
      console.log("Form invalid!");
    }
  }
  suggestioncClick() { 
    this.suggestionClicked = true;
    console.log("link clicked!");
    console.log("suggestion clicked :",this.suggestionClicked);
    this.step3Form.get('email')?.setValue(this.suggestion, { emitEvent: false });
    this.emailSuggestionFlag = false;
  }
}
