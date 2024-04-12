import { Component } from '@angular/core';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {
  buttonDontKnow: boolean = false;
  buttonOption1: boolean = false;
  buttonOption2: boolean = false;
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
}
