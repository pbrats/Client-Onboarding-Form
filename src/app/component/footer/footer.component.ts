import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LanguageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() language!: string;
}
