import { Component } from '@angular/core';
import { setActiveConsumer } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
}
