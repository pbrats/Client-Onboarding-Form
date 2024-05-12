import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component {
  buttonDontKnow: boolean = false;
  buttonNo: boolean = false;
  buttonYes: boolean = false;
  buttonSame: boolean = false;
  buttonDifferent: boolean = false;
  buttonOut: boolean = false;
  buttonWall: boolean = false;
  buttonStand: boolean = false;
  buttonDontKnowMeters: boolean = false;
  button0Meters: boolean = false;
  button5Meters: boolean = false;
  button10Meters: boolean = false;
  button15Meters: boolean = false;
  language!: string;
  darkTheme!: boolean;
  step1Form!: FormGroup;
  // invalidFlag1: boolean = false;
  // invalidFlag1_yes: boolean = false;
  // invalidFlag1_no: boolean = false;
  // invalidFlag2: boolean = false;
  // invalidFlag3: boolean = false;
  // invalidFlag4: boolean = false;
  // invalidFlag: boolean = false;
  selectedNo: boolean = false;
  selectedYes: boolean = false;
  step1value: any;
  selectedButton1Value: any;
  selectYesValue: any;
  selectNoValue: any;
  selectedButton2Value: any;
  selectedButton3Value: any;
  selectedButton4Value: any;
  constructor(private router: Router, private languageService: LanguageService, private themeService: ThemeService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    const step1Stored = sessionStorage.getItem("step1");
    if (step1Stored !== null) {
      const step1 = JSON.parse(step1Stored);
      console.log("step1 onInit: ", step1);

      this.selectedButton1Value = step1["selectedButton1"];
      this.selectYesValue = step1["selectYes"];
      this.selectNoValue = step1["selectNo"];
      this.selectedButton2Value = step1["selectedButton2"];
      this.selectedButton3Value = step1["selectedButton3"];
      this.selectedButton4Value = step1["selectedButton4"];
    }
    console.log("this.selectedButton1Value", this.selectedButton1Value);
    // this.selectedButton1Value = sessionStorage.getItem("selectedButton1");
    // this.selectYesValue = sessionStorage.getItem("selectYes");
    // this.selectNoValue = sessionStorage.getItem("selectNo");
    // this.selectedButton2Value = sessionStorage.getItem("selectedButton2");
    // this.selectedButton3Value = sessionStorage.getItem("selectedButton3");
    // this.selectedButton4Value = sessionStorage.getItem("selectedButton4");
    if (this.selectedButton1Value !== undefined && this.selectedButton2Value !== undefined && this.selectedButton3Value !== undefined && this.selectedButton4Value !== undefined) {
      if (this.selectYesValue !== undefined) {
        this.step1Form = this.formBuilder.group({
          selectedButton1: [this.selectedButton1Value, Validators.required],
          selectYes: [this.selectYesValue, Validators.required],
          selectNo: [''],
          selectedButton2: [this.selectedButton2Value, Validators.required],
          selectedButton3: [this.selectedButton3Value, Validators.required],
          selectedButton4: [this.selectedButton4Value, Validators.required]
        });
      } else if (this.selectNoValue !== undefined) {
        this.step1Form = this.formBuilder.group({
          selectedButton1: [this.selectedButton1Value, Validators.required],
          selectYes: [''],
          selectNo: [this.selectNoValue, Validators.required],
          selectedButton2: [this.selectedButton2Value, Validators.required],
          selectedButton3: [this.selectedButton3Value, Validators.required],
          selectedButton4: [this.selectedButton4Value, Validators.required]
        });
      } else {
        this.step1Form = this.formBuilder.group({
          selectedButton1: [this.selectedButton1Value, Validators.required],
          selectYes: [''],
          selectNo: [''],
          selectedButton2: [this.selectedButton2Value, Validators.required],
          selectedButton3: [this.selectedButton3Value, Validators.required],
          selectedButton4: [this.selectedButton4Value, Validators.required]
        });
      }
      if (this.selectedButton1Value === 'buttonYes') {
        this.buttonYes = true;
        this.step1Form.get('selectYes')?.setValidators(Validators.required);
      } else if (this.selectedButton1Value === 'buttonNo') {
        this.buttonNo = true;
        this.step1Form.get('selectNo')?.setValidators(Validators.required);
      } else {
        this.buttonDontKnow = true;
      }
      if (this.selectedButton2Value === 'buttonSame') {
        this.buttonSame = true;
      } else if (this.selectedButton2Value === 'buttonDifferent') {
        this.buttonDifferent = true;
      } else if (this.selectedButton2Value === 'buttonOut') {
        this.buttonOut = true;
      }
      if (this.selectedButton3Value === 'buttonWall') {
        this.buttonWall = true;
      } else if (this.selectedButton3Value === 'buttonStand') {
        this.buttonStand = true;
      }
      if (this.selectedButton4Value === 'buttonDontKnowMeters') {
        this.buttonDontKnowMeters = true;
      } else if (this.selectedButton4Value === 'button0Meters') {
        this.button0Meters = true;
      } else if (this.selectedButton4Value === 'button5Meters') {
        this.button5Meters = true;
      } else if (this.selectedButton4Value === 'button10Meters') {
        this.button10Meters = true;
      } else {
        this.button15Meters = true;
      }
    } else {
      this.step1Form = this.formBuilder.group({
        selectedButton1: ['', Validators.required],
        selectYes: [''],
        selectNo: [''],
        selectedButton2: ['', Validators.required],
        selectedButton3: ['', Validators.required],
        selectedButton4: ['', Validators.required]
      });
    }
  }
  onSubmit() {
    this.step1Form.markAllAsTouched();
    this.step1value = this.step1Form;
    console.log("step1value: ", this.step1value);
    console.log("value", this.step1Form.value);
    console.log("selected button1 on submit : ", this.step1Form.get("selectedButton1"));
    this.selectedButton1Value = this.step1Form.get("selectedButton1")?.value;
    if (this.selectedButton1Value !== '') {
      console.log("selected button1 value on submit : ", this.selectedButton1Value);
      const step1Stored = sessionStorage.getItem("step1");
      if (step1Stored !== null) {
        const step1 = JSON.parse(step1Stored);
        console.log(step1);
        console.log(typeof (step1));
        step1['selectedButton1'] = this.selectedButton1Value;
        sessionStorage.setItem("step1", JSON.stringify(step1));
      } else {
        const newItem = { 'selectedButton1': this.selectedButton1Value };
        console.log("new item button1 :", newItem);
        console.log(typeof (newItem));
        sessionStorage.setItem("step1", JSON.stringify(newItem));
      }
      // sessionStorage.setItem("selectedButton1", this.selectedButton1Value);
    }
    if (this.selectedYes) {
      this.selectYesValue = this.step1Form.get("selectYes")?.value;
      console.log("selectYes on submit : ", this.selectYesValue);
      const step1Stored = sessionStorage.getItem("step1");
      if (step1Stored !== null) {
        const step1 = JSON.parse(step1Stored);
        console.log(step1);
        console.log(typeof (step1));
        step1['selectYes'] = this.selectYesValue;
        if (step1['selectNo'] !== null) {
          delete step1['selectNo'];
          console.log('selectNo deleted');
          console.log("step1 new:", step1);
        }
        sessionStorage.setItem("step1", JSON.stringify(step1));
      }
      // sessionStorage.setItem("selectYes", this.selectYesValue);
      // sessionStorage.removeItem("selectNo");
    }
    if (this.selectedNo) {
      this.selectNoValue = this.step1Form.get("selectNo")?.value;
      console.log("selectNo on submit : ", this.selectNoValue);
      const step1Stored = sessionStorage.getItem("step1");
      if (step1Stored !== null) {
        const step1 = JSON.parse(step1Stored);
        console.log(step1);
        console.log(typeof (step1));
        step1['selectNo'] = this.selectNoValue;
        if (step1['selectYes'] !== null) {
          delete step1['selectYes'];
          console.log('selectYes deleted');
          console.log("step1 new:", step1);
        }
        sessionStorage.setItem("step1", JSON.stringify(step1));
      }
      // sessionStorage.setItem("selectNo", this.selectNoValue);
      // sessionStorage.removeItem("selectYes");
    }
    this.selectedButton2Value = this.step1Form.get("selectedButton2")?.value;
    if (this.selectedButton2Value !== '') {
      console.log("selected button2 value on submit : ", this.selectedButton2Value);
      const step1Stored = sessionStorage.getItem("step1");
      if (step1Stored !== null) {
        const step1 = JSON.parse(step1Stored);
        console.log(step1);
        console.log(typeof (step1));
        step1['selectedButton2'] = this.selectedButton2Value;
        sessionStorage.setItem("step1", JSON.stringify(step1));
      } else {
        const newItem = { 'selectedButton2': this.selectedButton2Value };
        console.log("new item button2 :", newItem);
        console.log(typeof (newItem));
        sessionStorage.setItem("step1", JSON.stringify(newItem));
      }
      // sessionStorage.setItem("selectedButton2", this.selectedButton2Value);
    }
    this.selectedButton3Value = this.step1Form.get("selectedButton3")?.value;
    if (this.selectedButton3Value !== '') {
      console.log("selected button3 value on submit : ", this.selectedButton3Value);
      const step1Stored = sessionStorage.getItem("step1");
      if (step1Stored !== null) {
        const step1 = JSON.parse(step1Stored);
        console.log(step1);
        console.log(typeof (step1));
        step1['selectedButton3'] = this.selectedButton3Value;
        sessionStorage.setItem("step1", JSON.stringify(step1));
      } else {
        const newItem = { 'selectedButton3': this.selectedButton3Value };
        console.log("new item button3 :", newItem);
        console.log(typeof (newItem));
        sessionStorage.setItem("step1", JSON.stringify(newItem));
      }
      // sessionStorage.setItem("selectedButton3", this.selectedButton3Value);
    }
    this.selectedButton4Value = this.step1Form.get("selectedButton4")?.value;
    if (this.selectedButton4Value !== '') {
      console.log("selected button4 value on submit : ", this.selectedButton4Value);
      const step1Stored = sessionStorage.getItem("step1");
      if (step1Stored !== null) {
        const step1 = JSON.parse(step1Stored);
        console.log(step1);
        console.log(typeof (step1));
        step1['selectedButton4'] = this.selectedButton4Value;
        sessionStorage.setItem("step1", JSON.stringify(step1));
      } else {
        const newItem = { 'selectedButton4': this.selectedButton4Value };
        console.log("new item button4 :", newItem);
        console.log(typeof (newItem));
        sessionStorage.setItem("step1", JSON.stringify(newItem));
      }
      // sessionStorage.setItem("selectedButton4", this.selectedButton4Value);
    }
    if (this.step1Form.valid) {
      this.router.navigate(['step2']);
    } else {
      console.log("Invalid form!");
    }
    // if (!this.buttonDontKnow && !this.buttonNo && !this.buttonYes) {
    //   this.invalidFlag1 = true;
    // }
    // if (this.buttonNo && !this.selectedNo) {
    //   this.invalidFlag1_no = true;
    // }
    // if (this.buttonYes && !this.selectedYes) {
    //   this.invalidFlag1_yes = true;
    // }
    // if (!this.buttonSame && !this.buttonDifferent && !this.buttonOut) {
    //   this.invalidFlag2 = true;
    // }
    // if (!this.buttonWall && !this.buttonStand) {
    //   this.invalidFlag3 = true;
    // }
    // if (!this.buttonDontKnowMeters && !this.button0Meters && !this.button5Meters && !this.button10Meters && !this.button15Meters) {
    //   this.invalidFlag4 = true;
    // }
    // if (this.invalidFlag1 || this.invalidFlag2 || this.invalidFlag3 || this.invalidFlag4 || this.invalidFlag1_yes || this.invalidFlag1_no) {
    //   this.invalidFlag = true;
    // } else {
    //   this.invalidFlag = false;
    // }
    // if (!this.invalidFlag) {
    //   this.router.navigate(['step2']);
    // }
  }
  onClick1(buttonName: string) {
    this.step1Form.patchValue({
      selectedButton1: buttonName
    });
    console.log("selectedButton1 :", buttonName);
    if (buttonName == "buttonDontKnow") {
      console.log("button Dont know");
      this.step1Form.get('selectYes')?.clearValidators();
      this.step1Form.get('selectNo')?.clearValidators();
      this.buttonDontKnow = true;
      this.buttonYes = false;
      this.buttonNo = false;
    } else if (buttonName == "buttonYes") {
      this.step1Form.get('selectYes')?.setValidators(Validators.required);
      this.step1Form.get('selectNo')?.clearValidators();
      console.log("button Yes");
      this.buttonYes = true;
      this.buttonDontKnow = false;
      this.buttonNo = false;
    } else {
      console.log("button No");
      this.step1Form.get('selectNo')?.setValidators(Validators.required);
      this.step1Form.get('selectYes')?.clearValidators();
      this.buttonNo = true;
      this.buttonYes = false;
      this.buttonDontKnow = false;
    }
    this.step1Form.get('selectYes')?.updateValueAndValidity();
    this.step1Form.get('selectNo')?.updateValueAndValidity();
    // this.invalidFlag1 = false;
  }
  onClick2(buttonName: string) {
    this.step1Form.patchValue({
      selectedButton2: buttonName
    });
    console.log("selectedButton2 :", buttonName);
    if (buttonName == "buttonSame") {
      console.log("button Same");
      this.buttonSame = true;
      this.buttonDifferent = false;
      this.buttonOut = false;
    } else if (buttonName == "buttonDifferent") {
      console.log("button Different");
      this.buttonDifferent = true;
      this.buttonSame = false;
      this.buttonOut = false;
    } else {
      console.log("button Out");
      this.buttonOut = true;
      this.buttonDifferent = false;
      this.buttonSame = false;
    }
    // this.invalidFlag2 = false;
  }
  onClick3(buttonName: string) {
    this.step1Form.patchValue({
      selectedButton3: buttonName
    });
    console.log("selectedButton3 :", buttonName);
    if (buttonName == "buttonWall") {
      console.log("button Wall");
      this.buttonWall = true;
      this.buttonStand = false;
    } else {
      console.log("button Stand");
      this.buttonStand = true;
      this.buttonWall = false;
    }
    // this.invalidFlag3 = false;
  }
  onClick4(buttonName: string) {
    this.step1Form.patchValue({
      selectedButton4: buttonName
    });
    console.log("selectedButton4 :", buttonName);
    if (buttonName == "buttonDontKnowMeters") {
      console.log("button buttonDontKnowMeters");
      this.buttonDontKnowMeters = true;
      this.button0Meters = false;
      this.button5Meters = false;
      this.button10Meters = false;
      this.button15Meters = false;
    } else if (buttonName == "button0Meters") {
      console.log("button 0Meters");
      this.button0Meters = true;
      this.button5Meters = false;
      this.button10Meters = false;
      this.button15Meters = false;
      this.buttonDontKnowMeters = false;
    } else if (buttonName == "button5Meters") {
      console.log("button 5Meters");
      this.button5Meters = true;
      this.button0Meters = false;
      this.buttonDontKnowMeters = false;
      this.button10Meters = false;
      this.button15Meters = false;
    } else if (buttonName == "button10Meters") {
      console.log("button 10Meters");
      this.button10Meters = true;
      this.button0Meters = false;
      this.button5Meters = false;
      this.buttonDontKnowMeters = false;
      this.button15Meters = false;
    } else {
      console.log("button 15Meters");
      this.button15Meters = true;
      this.button0Meters = false;
      this.button5Meters = false;
      this.button10Meters = false;
      this.buttonDontKnowMeters = false;
    }
    // this.invalidFlag4 = false;
  }
  onSelectionChangeYes(event: any) {
    this.selectedYes = true;
    console.log('Selected value Yes:', event.target.value);
    // this.invalidFlag1_yes = false;
  }
  onSelectionChangeNo(event: any) {
    this.selectedNo = true;
    console.log('Selected value No:', event.target.value);
    // this.invalidFlag1_no = false;
  }
}