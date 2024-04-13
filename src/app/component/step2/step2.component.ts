import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
  clickedDontKnow(): void {
    if (this.buttonDontKnow) {

    } else {// if it is inactive it activates 
      this.buttonDontKnow = true;
      this.buttonOption1 = false;
      this.buttonOption2 = false;

    }
  }
  clickedOption1(): void {
    if (this.buttonOption1) {

    } else {// if it is inactive it activates 
      this.buttonOption1 = true;
      this.buttonDontKnow = false;
      this.buttonOption2 = false;

    }
  }
  clickedOption2(): void {
    if (this.buttonOption2) {

    } else {// if it is inactive it activates 
      this.buttonOption2 = true;
      this.buttonOption1 = false;
      this.buttonDontKnow = false;

    }
  }
  clickedNoCable(): void {
    if (this.buttonNoCable) {

    } else {// if it is inactive it activates 
      this.buttonNoCable = true;
      this.button5MetersCable = false;
      this.button7MetersCable = false;
      this.button15MetersCable = false;
    }
  }

  clicked5MetersCable(): void {
    if (this.button5MetersCable) {

    } else {// if it is inactive it activates 
      this.button5MetersCable = true;
      this.buttonNoCable = false;
      this.button7MetersCable = false;
      this.button15MetersCable = false;
    }
  }
  clicked7MetersCable(): void {
    if (this.button7MetersCable) {

    } else {// if it is inactive it activates 
      this.button7MetersCable = true;
      this.button5MetersCable = false;
      this.buttonNoCable = false;
      this.button15MetersCable = false;
    }
  }
  clicked15MetersCable(): void {
    if (this.button15MetersCable) {

    } else {// if it is inactive it activates 
      this.button15MetersCable = true;
      this.button5MetersCable = false;
      this.button7MetersCable = false;
      this.buttonNoCable = false;
    }
  }
}
