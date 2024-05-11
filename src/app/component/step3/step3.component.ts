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
      telephone: new FormControl("", [Validators.required, Validators.pattern("[0-9+()-.x]*"), Validators.minLength(7), Validators.maxLength(20)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required]),
      postalCode: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      referralCode: new FormControl(""),
      newsletter: new FormControl(""),
      invalidCheck: new FormControl("", [Validators.requiredTrue])
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
    }else{
      console.log("Form invalid!");
    }
  }
}
