import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ChatboxComponent, LanguageComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {
  buttonDontKnow: boolean = false;
  buttonOption1: boolean = false;
  buttonOption2: boolean = false;
  buttonNoCable: boolean = false;
  button5MetersCable: boolean = false;
  button7MetersCable: boolean = false;
  button15MetersCable: boolean = false;
  language!: string;
  darkTheme!: boolean;
  step2Form!: FormGroup;
  selectedButton1Value: any;
  selectedButton2Value: any;
  step2value: any;
  constructor(private router: Router, private languageService: LanguageService, private themeService: ThemeService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    const step2Stored = sessionStorage.getItem("step2");
    if (step2Stored !== null) {
      const step2 = JSON.parse(step2Stored);
      console.log("step2 onInit: ", step2);

      this.selectedButton1Value = step2["selectedButton1"];
      this.selectedButton2Value = step2["selectedButton2"];
    }
    console.log("this.selectedButton1Value", this.selectedButton1Value);
    if (this.selectedButton1Value !== undefined && this.selectedButton2Value !== undefined) {
      this.step2Form = this.formBuilder.group({
        selectedButton1: [this.selectedButton1Value, Validators.required],
        selectedButton2: [this.selectedButton2Value, Validators.required]
      });
      if (this.selectedButton1Value === 'buttonOption1') {
        this.buttonOption1 = true;
      } else if (this.selectedButton1Value === 'buttonOption2') {
        this.buttonOption2 = true;
      } else if (this.selectedButton1Value === 'buttonDontKnow') {
        this.buttonDontKnow = true;
      }
      if (this.selectedButton2Value === 'buttonNoCable') {
        this.buttonNoCable = true;
      } else if (this.selectedButton2Value === 'button5MetersCable') {
        this.button5MetersCable = true;
      } else if (this.selectedButton2Value === 'button7MetersCable') {
        this.button7MetersCable = true;
      } else if (this.selectedButton2Value === 'button15MetersCable') {
        this.button15MetersCable = true;
      }
    } else {
      this.step2Form = this.formBuilder.group({
        selectedButton1: ['', Validators.required],
        selectedButton2: ['', Validators.required]
      });
    }
  }
  onSubmit() {
    this.step2Form.markAllAsTouched();
    this.step2value = this.step2Form;
    console.log("step2value: ", this.step2value);
    console.log("value", this.step2Form.value);
    console.log("selected button1 on submit : ", this.step2Form.get("selectedButton1"));
    this.selectedButton1Value = this.step2Form.get("selectedButton1")?.value;
    if (this.selectedButton1Value !== '') {
      console.log("selected button1 value on submit : ", this.selectedButton1Value);
      const step2Stored = sessionStorage.getItem("step2");
      if (step2Stored !== null) {
        const step2 = JSON.parse(step2Stored);
        console.log(step2);
        console.log(typeof (step2));
        step2['selectedButton1'] = this.selectedButton1Value;
        sessionStorage.setItem("step2", JSON.stringify(step2));
      } else {
        const newItem = { 'selectedButton1': this.selectedButton1Value };
        console.log("new item button1 :", newItem);
        console.log(typeof (newItem));
        sessionStorage.setItem("step2", JSON.stringify(newItem));
      }
    }
    this.selectedButton2Value = this.step2Form.get("selectedButton2")?.value;
    if (this.selectedButton2Value !== '') {
      console.log("selected button2 value on submit : ", this.selectedButton2Value);
      const step2Stored = sessionStorage.getItem("step2");
      if (step2Stored !== null) {
        const step2 = JSON.parse(step2Stored);
        console.log(step2);
        console.log(typeof (step2));
        step2['selectedButton2'] = this.selectedButton2Value;
        sessionStorage.setItem("step2", JSON.stringify(step2));
      } else {
        const newItem = { 'selectedButton2': this.selectedButton2Value };
        console.log("new item button2 :", newItem);
        console.log(typeof (newItem));
        sessionStorage.setItem("step2", JSON.stringify(newItem));
      }
    }
    if (this.step2Form.valid) {
      this.router.navigate(['step3']);
    } else {
      console.log("Invalid form!");
    }
  }
  onClick1(buttonName: string) {
    this.step2Form.patchValue({
      selectedButton1: buttonName
    });
    console.log("selectedButton1 :", buttonName);
    if (buttonName == "buttonDontKnow") {
      console.log("button Dont know");
      this.buttonDontKnow = true;
      this.buttonOption1 = false;
      this.buttonOption2 = false;
    } else if (buttonName == "buttonOption1") {
      console.log("button Option1");
      this.buttonOption1 = true;
      this.buttonDontKnow = false;
      this.buttonOption2 = false;
    } else {
      console.log("button Option2");
      this.buttonOption2 = true;
      this.buttonOption1 = false;
      this.buttonDontKnow = false;
    }
  }
  onClick2(buttonName: string) {
    this.step2Form.patchValue({
      selectedButton2: buttonName
    });
    console.log("selectedButton2 :", buttonName);
    if (buttonName == "buttonNoCable") {
      console.log("button NoCable");
      this.buttonNoCable = true;
      this.button5MetersCable = false;
      this.button7MetersCable = false;
      this.button15MetersCable = false;
    } else if (buttonName == "button5MetersCable") {
      console.log("button 5MetersCable");
      this.button5MetersCable = true;
      this.buttonNoCable = false;
      this.button7MetersCable = false;
      this.button15MetersCable = false;
    } else if (buttonName == "7MetersCable") {
      console.log("button 7MetersCable");
      this.button7MetersCable = true;
      this.button5MetersCable = false;
      this.buttonNoCable = false;
      this.button15MetersCable = false;
    } else {
      console.log("button 15MetersCable");
      this.button15MetersCable = true;
      this.button5MetersCable = false;
      this.button7MetersCable = false;
      this.buttonNoCable = false;
    }
  }
}
