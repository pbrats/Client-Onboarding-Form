import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, LanguageComponent],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  @Output() actionEventEmitter = new EventEmitter();
  chatForm!: FormGroup;
  typedMessage: string = '';
  hasTyped: boolean = false;
  new: boolean = false;
  counter: number = 0;
  prCounter: number = 0;
  newtyped: any;
  delay: boolean = false;
  language!: string;
  ngOnInit() {
    const lang = sessionStorage.getItem('language');
    console.log("language oninit: ", lang);
    if (lang) {
      this.language = lang;
    }
    this.setFormValues();
  }
  change(event: any) {
    this.language = event;
    console.log("language change chatbox ", event);
    this.actionEventEmitter.emit(event);
    sessionStorage.setItem('language', event);
  }
  setFormValues() {
    this.chatForm = new FormGroup({
      message: new FormControl("",)
    });
  }
  onSubmit() {
    if (this.counter == 0) {
      this.hasTyped = true;
      this.typedMessage = this.chatForm.get("message")?.value;
      // this.typedMessage = this.chatForm.value.message;
      console.log("1st typed Message", this.typedMessage);
      this.counter++;
    } else {
      if (this.counter > this.prCounter) {
        this.new = true;
        if (this.counter == 1) {
          this.newtyped = [this.chatForm.get("message")?.value];
          console.log("2nd typed Message", this.newtyped);
        } else {
          this.newtyped.push(this.chatForm.get("message")?.value);
          console.log("new typed Message", this.newtyped);
        }
      }
      this.counter++;
      this.prCounter = this.counter - 1;
    }
    console.log("counter:", this.counter);
    console.log("previous counter:", this.prCounter);
    this.chatForm.reset();
    setTimeout(() => {
      this.delay = true;
    }, 1000);
  }
}