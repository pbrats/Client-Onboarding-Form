import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../service/language.service';
import { ThemeService } from '../../service/theme.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  invalidFlag1: boolean = false;
  invalidFlag1_yes: boolean = false;
  invalidFlag1_no: boolean = false;
  invalidFlag2: boolean = false;
  invalidFlag3: boolean = false;
  invalidFlag4: boolean = false;
  invalidFlag: boolean = false;
  selectedNo: boolean = false;
  selectedYes: boolean = false; 
  step1value: any;
  selectedButtonValue:any;
  constructor(private router: Router, private languageService: LanguageService, private themeService: ThemeService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.themeService.darkTheme$.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    this.selectedButtonValue =sessionStorage.getItem("selectedButton");
    if (this.selectedButtonValue !== null) {
    this.step1Form = this.formBuilder.group({
      selectedButton: [this.selectedButtonValue, Validators.required],
      selectYes: [''],
      selectNo: ['']
            // searchData: new FormControl(this.searchQuery || '', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(3)])

    });
    if (this.selectedButtonValue === 'buttonYes') {
      this.buttonYes = true;
    } else if (this.selectedButtonValue === 'buttonNo') {
      this.buttonNo = true;
    } else {
      this.buttonDontKnow = true;
    }
  } else {
    this.step1Form = this.formBuilder.group({
      selectedButton: ['', Validators.required],
      selectYes: [''],
      selectNo: [''],
    });
  }
    // this.setFormValues();
  }
  setFormValues() {
    this.step1Form = new FormGroup({
      // email: new FormControl("", [Validators.required, Validators.email]),
      // installation: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    this.selectedButtonValue=this.step1Form.get("selectedButton")?.value;
    console.log("selected button value on submit : ", this.selectedButtonValue);
    if (this.selectedButtonValue !== '') {
      sessionStorage.setItem("selectedButton",this.selectedButtonValue);
    }
    console.log("selected button on submit : ",this.step1Form.get("selectedButton"));
    console.log("selectedYES on submit : ",this.step1Form.get("selectedYes"));
    console.log("selectedNo on submit : ",this.step1Form.get("selectedNo"));
    this.step1value=this.step1Form;
    console.log("step1value: ",this.step1value);
    console.log("value",this.step1Form.value);
    if (this.step1Form.valid) {
      this.router.navigate(['step2']);
    }else{
      // this.invalidFlag1 = true;
      // this.invalidFlag2 = true;
      // this.invalidFlag3 = true;
      // this.invalidFlag4 = true;
      // this.invalidFlag = true;
    }

    if (!this.buttonDontKnow && !this.buttonNo && !this.buttonYes) {
      this.invalidFlag1 = true;
      this.invalidFlag = true;
    }
    if(this.buttonNo && !this.selectedNo){
      this.invalidFlag1_no = true;
    }
    if(this.buttonYes && !this.selectedYes){
      this.invalidFlag1_yes = true;
    }
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
  onClick(buttonName: string) {
    this.step1Form.patchValue({
      selectedButton: buttonName
    });
    console.log("selectedButton :", buttonName);
    if(buttonName == "buttonDontKnow"){
      console.log("button Dont know");
      this.step1Form.get('selectYes')?.clearValidators();
      this.step1Form.get('selectNo')?.clearValidators();
      this.buttonDontKnow = true;
      this.buttonYes = false;
      this.buttonNo = false;
      // this.invalidFlag1_yes = false;
      // this.invalidFlag1_no = false;
    }else if(buttonName == "buttonYes"){
      this.step1Form.get('selectYes')?.setValidators(Validators.required);
      this.step1Form.get('selectNo')?.clearValidators();
      console.log("button Yes");
      this.buttonYes = true;
      this.buttonDontKnow = false;
      this.buttonNo = false;
      // this.invalidFlag1_no = false;
      // this.invalidFlag1_yes = false;
    }else {
      console.log("button No");
      this.step1Form.get('selectNo')?.setValidators(Validators.required);
      this.step1Form.get('selectYes')?.clearValidators();
      this.buttonNo = true;
      this.buttonYes = false;
      this.buttonDontKnow = false;
    }
    this.step1Form.get('selectYes')?.updateValueAndValidity();
    this.step1Form.get('selectNo')?.updateValueAndValidity();
     this.invalidFlag1 = false;
  }
  // clickedDontKnow(): void {
  //   if (this.buttonDontKnow) {

  //   } else {// if it is inactive it activates 
  //     this.buttonDontKnow = true;
  //     this.buttonYes = false;
  //     this.buttonNo = false;
  //     this.invalidFlag1 = false;
  //     this.invalidFlag1_yes = false;
  //     this.invalidFlag1_no = false;
  //   }
  // }
  // clickedYes(): void {
  //   if (this.buttonYes) {

  //   } else {// if it is inactive it activates 
  //     this.buttonYes = true;
  //     this.buttonDontKnow = false;
  //     this.buttonNo = false;
  //     this.invalidFlag1 = false;
  //     this.invalidFlag1_no = false;
  //   }
  // }
  // clickedNo(): void {
  //   if (this.buttonNo) {

  //   } else {// if it is inactive it activates 
  //     this.buttonNo = true;
  //     this.buttonYes = false;
  //     this.buttonDontKnow = false;
  //     this.invalidFlag1 = false;
  //     this.invalidFlag1_yes = false;
  //   }
  // }
 
  onSelectionChangeYes(event: any) {
    this.selectedYes=true;
    console.log('Selected value Yes:', event.target.value);
    this.invalidFlag1_yes = false;
  }
  onSelectionChangeNo(event: any) {
    this.selectedNo=true;
    console.log('Selected value No:', event.target.value);
      this.invalidFlag1_no = false;
  }
  clickedSame(): void {
    if (this.buttonSame) {

    } else {// if it is inactive it activates 
      this.buttonSame = true;
      this.buttonDifferent = false;
      this.buttonOut = false;
      this.invalidFlag2 = false;
    }
  }
  clickedDifferent(): void {
    if (this.buttonDifferent) {

    } else {// if it is inactive it activates 
      this.buttonDifferent = true;
      this.buttonSame = false;
      this.buttonOut = false;
      this.invalidFlag2 = false;
    }
  }
  clickedOut(): void {
    if (this.buttonOut) {

    } else {// if it is inactive it activates 
      this.buttonOut = true;
      this.buttonDifferent = false;
      this.buttonSame = false;
      this.invalidFlag2 = false;
    }
  }
  clickedWall(): void {
    if (this.buttonWall) {

    } else {// if it is inactive it activates 
      this.buttonWall = true;
      this.buttonStand = false;
      this.invalidFlag3 = false;
    }
  }
  clickedStand(): void {
    if (this.buttonStand) {

    } else { // if it is inactive it activates 
      this.buttonStand = true;
      this.buttonWall = false;
      this.invalidFlag3 = false;
    }
  }
  clickedDontKnowMeters(): void {
    if (this.buttonDontKnowMeters) {

    } else {// if it is inactive it activates 
      this.buttonDontKnowMeters = true;
      this.button0Meters = false;
      this.button5Meters = false;
      this.button10Meters = false;
      this.button15Meters = false;
      this.invalidFlag4 = false;
    }
  }
  clicked0Meters(): void {
    if (this.button0Meters) {

    } else {// if it is inactive it activates 
      this.button0Meters = true;
      this.button5Meters = false;
      this.button10Meters = false;
      this.button15Meters = false;
      this.buttonDontKnowMeters = false;
      this.invalidFlag4 = false;
    }
  }
  clicked5Meters(): void {
    if (this.button5Meters) {

    } else {// if it is inactive it activates 
      this.button5Meters = true;
      this.button0Meters = false;
      this.buttonDontKnowMeters = false;
      this.button10Meters = false;
      this.button15Meters = false;
      this.invalidFlag4 = false;
    }
  }
  clicked10Meters(): void {
    if (this.button10Meters) {

    } else {// if it is inactive it activates 
      this.button10Meters = true;
      this.button0Meters = false;
      this.button5Meters = false;
      this.buttonDontKnowMeters = false;
      this.button15Meters = false;
      this.invalidFlag4 = false;
    }
  }
  clicked15Meters(): void {
    if (this.button15Meters) {

    } else {// if it is inactive it activates 
      this.button15Meters = true;
      this.button0Meters = false;
      this.button5Meters = false;
      this.button10Meters = false;
      this.buttonDontKnowMeters = false;
      this.invalidFlag4 = false;
    }
  }
}