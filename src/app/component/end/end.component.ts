import { Component } from '@angular/core';
import { setActiveConsumer } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [RouterLink, ChatboxComponent],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
}
