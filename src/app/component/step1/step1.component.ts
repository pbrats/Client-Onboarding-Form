import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LanguageComponent } from '../language/language.component';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ChatboxComponent, LanguageComponent],
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
  constructor(private languageService: LanguageService) { }
  ngOnInit() {
    this.languageService.language$.subscribe(language => {
      this.language = language;
    });
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", this.language);
    console.log("language session storage: ", lang);
    //to check if there is a language already selected and stored in session storage
    if (lang!== null) { 
      this.language = lang;
    }
  }
  // ngOnInit() {
  //   const lang = sessionStorage.getItem('language');
  //   console.log("language oninit: ", lang);
  //   if (lang) {
  //     this.language = lang;
  //   }
  // }
  // change(event: any) {
  //   this.language = event;
  //   console.log("language change step1 ", event);
  // }
  clickedDontKnow(): void {
    if (this.buttonDontKnow) {

    } else {// if it is inactive it activates 
      this.buttonDontKnow = true;
      this.buttonYes = false;
      this.buttonNo = false;

    }
  }
  clickedYes(): void {
    if (this.buttonYes) {

    } else {// if it is inactive it activates 
      this.buttonYes = true;
      this.buttonDontKnow = false;
      this.buttonNo = false;

    }
  }
  clickedNo(): void {
    if (this.buttonNo) {

    } else {// if it is inactive it activates 
      this.buttonNo = true;
      this.buttonYes = false;
      this.buttonDontKnow = false;

    }
  }
  clickedSame(): void {
    if (this.buttonSame) {

    } else {// if it is inactive it activates 
      this.buttonSame = true;
      this.buttonDifferent = false;
      this.buttonOut = false;

    }
  }
  clickedDifferent(): void {
    if (this.buttonDifferent) {

    } else {// if it is inactive it activates 
      this.buttonDifferent = true;
      this.buttonSame = false;
      this.buttonOut = false;

    }
  }
  clickedOut(): void {
    if (this.buttonOut) {

    } else {// if it is inactive it activates 
      this.buttonOut = true;
      this.buttonDifferent = false;
      this.buttonSame = false;

    }
  }
  clickedWall(): void {
    if (this.buttonWall) {

    } else {// if it is inactive it activates 
      this.buttonWall = true;
      this.buttonStand = false;
    }
  }
  clickedStand(): void {
    if (this.buttonStand) {

    } else { // if it is inactive it activates 
      this.buttonStand = true;
      this.buttonWall = false;
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

    }
  }
}