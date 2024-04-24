import { Component, Input, SimpleChanges } from '@angular/core';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [LanguageComponent],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  @Input() language!: string;
  ngOnChanges(changes: SimpleChanges) { 
    console.log('changes: ', changes);
    if (changes['language']) {
      console.log("change language bottom current value: ", changes['language'].currentValue);
      this.language = changes['language'].currentValue;
    }
  }
}
